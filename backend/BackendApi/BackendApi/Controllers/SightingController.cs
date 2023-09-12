using BackendApi.Data;
using BackendApi.Models;
using BackendApi.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SightingController : ControllerBase
    {
        //-----------[Start: inject ISightingService to this class] -------
        private readonly ISightingService sightingService;
        //-----------[End: inject ISightingService to this class] ---------


        //-----------[Start: inject IFileService to this class] -----
        public IFileService fileService;
        //-----------[End: inject IFileService to this class] -------

        public SightingController(ISightingService sightingService, IFileService fileService)
        {
            this.sightingService = sightingService;
            this.fileService = fileService;
        }
        //------------------------------------------------------------------


        //-----------------[Start: API CRUD operations]---------------------
        [HttpGet] //Get: Retreives all data from the server
        public async Task<ActionResult<List<Sighting>>> GetAllSighting()
        {
            string imagePathRequest = String.Format("{0}://{1}{2}/ImageUpload", Request.Scheme, Request.Host, Request.PathBase);

            return await sightingService.GetAllSighting(imagePathRequest);
        }

        [HttpGet] //Get:/api/{id}: Retreives data by id from the server
        [Route("{id}")]
        public async Task<ActionResult<Sighting>> GetSightingById([FromRoute] int id)
        {
            string imagePathRequest = String.Format("{0}://{1}{2}/ImageUpload", Request.Scheme, Request.Host, Request.PathBase);
            if (id < 1)
            {
                return BadRequest();
            }
            else
            {
                var result = await sightingService.GetSightingById(id, imagePathRequest);

                if (result is null)
                {
                    return NotFound("Sorry, this record is not exist");
                }

                return Ok(result);
            }

        }

        [HttpPost] //Post: Sends data to the server and create a new resource
        public async Task<ActionResult<List<Sighting>>> AddSighting([FromForm] Sighting sightingRequest)
        {
            if(sightingRequest.ImageFile != null)
            {
                //upload image file
                sightingRequest.Image = await fileService.UploadFile(sightingRequest.ImageFile);
            }

            var result = await sightingService.AddSighting(sightingRequest);

            return Ok();
        }

        [HttpPut] //Put: update an existing resource
        [Route("{id}")]
        public async Task<ActionResult<Sighting>> UpdateSighting(int id, [FromForm] Sighting sightingRequest)
        {
            if (sightingRequest.ImageFile != null)
            {
                //delete image
                fileService.DeleteFile(sightingRequest.Image);
                
                //update image file name
                sightingRequest.Image = await fileService.UploadFile(sightingRequest.ImageFile);
            }
            var result = await sightingService.UpdateSighting(id, sightingRequest);

            if (result is null)
            {
                return NotFound("Sorry, this record is not exist");
            }

            return Ok();
        }

        [HttpDelete] //Delete: delete a existing resource
        [Route("{id}")]
        public async Task<ActionResult<List<Sighting>>> DeleteSighting([FromRoute] int id)
        {
            if (id < 1)
            {
                return BadRequest();
            }
            else
            {
                var result = await sightingService.DeleteSighting(id);

                if (result is null)
                {
                    return NotFound("Sorry, this record is not exist");
                }

                return Ok();
            }
        }
        //-----------------[End: API CRUD operations]---------------------
    }
}

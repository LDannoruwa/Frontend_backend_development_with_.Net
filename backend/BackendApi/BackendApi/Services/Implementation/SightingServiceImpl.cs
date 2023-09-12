using Azure.Core;
using BackendApi.Data;
using BackendApi.Models;
using BackendApi.Services.Interface;
using Microsoft.EntityFrameworkCore;

namespace BackendApi.Services.Implementation
{
    //This class is inherited from ISightingService
    public class SightingServiceImpl : ISightingService
    {

        private readonly DataContext dataContext;

        //inject DbContext to this class
        public SightingServiceImpl(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public async Task<List<Sighting>> GetAllSighting(string imagePathRequest)
        {
            var sightings = await dataContext.Sightings
                    .Select(x => new Sighting()
                    {
                        Id = x.Id,
                        Make = x.Make,
                        Model = x.Model,
                        Registration = x.Registration,
                        Location = x.Location,
                        ObservedDateTime = x.ObservedDateTime,
                        Image = x.Image,

                        //url for the static file 
                        ImageSrc = String.Format("{0}/{1}", imagePathRequest, x.Image)
                    })
                .ToListAsync();
            return sightings;
        }

        public async Task<Sighting> GetSightingById(int id, string imagePathRequest)
        {
            var sighting = await dataContext.Sightings.FindAsync(id);

            //-------------------------------
            //url for the static file 
            sighting.ImageSrc = String.Format("{0}/{1}", imagePathRequest, sighting.Image);
            //-------------------------------
            if (sighting is null)
            {
                return null;
            }

            return sighting;
        }

        public async Task<List<Sighting>> AddSighting(Sighting sightingRequest)
        {
            dataContext.Sightings.Add(sightingRequest);
            await dataContext.SaveChangesAsync();

            return await dataContext.Sightings.ToListAsync();
        }

        public async Task<List<Sighting>> UpdateSighting(int id, Sighting sightingRequest)
        {
            var sighting = await dataContext.Sightings.FindAsync(id);

            if (sighting is null)
            {
                return null;
            }

            else
            {
                sighting.Id = sightingRequest.Id;
                sighting.Make = sightingRequest.Make;
                sighting.Model = sightingRequest.Model;
                sighting.Registration = sightingRequest.Registration;
                sighting.Location = sightingRequest.Location;
                sighting.ObservedDateTime = sightingRequest.ObservedDateTime;
                sighting.Image = sightingRequest.Image;

                //save changes
                await dataContext.SaveChangesAsync();
            }

            return await dataContext.Sightings.ToListAsync();
        }

        public async Task<List<Sighting>> DeleteSighting(int id)
        {
            var sighting = await dataContext.Sightings.FindAsync(id);

            if (sighting is null)
            {
                return null;
            }

            dataContext.Sightings.Remove(sighting);
            await dataContext.SaveChangesAsync();

            return await dataContext.Sightings.ToListAsync();
        }
    }
}

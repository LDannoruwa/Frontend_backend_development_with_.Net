using BackendApi.Data;
using BackendApi.Models;
using BackendApi.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using static Azure.Core.HttpHeader;

namespace BackendApi.Services.Implementation
{
    //This class is inherited from IFileService
    public class FileServiceImpl : IFileService
    {
        //inject:IWebHostEnvironment - To get wwwroot path
        private readonly IWebHostEnvironment environment;
        private readonly DataContext dataContext;

        public FileServiceImpl(IWebHostEnvironment environment, DataContext dataContext)
        {
            this.environment = environment;
            this.dataContext = dataContext;
        }

        //---------------------[Start : file handeling]-------------------------------
        public async Task<string> UploadFile(IFormFile file)
        {
            //provide unique name for image file
            string imageName = null;
            imageName = new String(Path.GetFileNameWithoutExtension(file.FileName).Take(10).ToArray()).Replace(' ','-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff")+Path.GetExtension(file.FileName);
            
            var imagePath = Path.Combine(environment.ContentRootPath, "ImageUpload", imageName);
            using var fileSteram = new FileStream(imagePath, FileMode.Create);
            {
                await file.CopyToAsync(fileSteram);
            }
            return imageName;
        }

        //------------------------------------------------
        public bool DeleteFile(string image)
        {
            var filePath = Path.Combine(environment.ContentRootPath, "ImageUpload", image);
            if(System.IO.File.Exists(image))
            {
                System.IO.File.Delete(image);
                return true;
            }
            return false;
        }
        //---------------------[End : file handeling]-------------------------------
    }
}

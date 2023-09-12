using BackendApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackendApi.Services.Interface
{
    public interface IFileService
    {
        Task<string> UploadFile(IFormFile file);

        public bool DeleteFile(string image);
    }
}

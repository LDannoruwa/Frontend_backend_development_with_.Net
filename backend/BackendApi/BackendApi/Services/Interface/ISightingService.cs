using BackendApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackendApi.Services.Interface
{
    public interface ISightingService
    {
        Task<List<Sighting>> GetAllSighting(string imagePathRequest);

        Task<Sighting> GetSightingById(int id, string imagePathRequest);

        Task<List<Sighting>> AddSighting(Sighting sightingRequest);

        Task<List<Sighting>> UpdateSighting(int id, Sighting sightingRequest);

        Task<List<Sighting>> DeleteSighting(int id);
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendApi.Models
{
    public class Sighting
    {
        [Key] //unique identifier
        public int Id { get; set; }

        [StringLength(128)]
        public string Make { get; set; }

        [StringLength(128)]
        public string Model { get; set; }

        [StringLength(128)]
        public string Registration { get; set; }

        [StringLength(255)]
        public string Location { get; set; }

        public DateTime ObservedDateTime { get; set; }

        public string Image { get; set; } //Image file name

        //-----------------[Start : file handle] ------------
        //This property is not be mapped to a table or column in db
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        //----------------------------------------------------

        [NotMapped]
        public string ImageSrc { get; set; } //to provide static file path for Image
        //-----------------[End : file handle] --------------
    }
}

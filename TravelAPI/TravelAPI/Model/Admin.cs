using System.ComponentModel.DataAnnotations;

namespace TravelAPI.Model
{
    public class Admin
    {
        [Key]
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }


    }
}
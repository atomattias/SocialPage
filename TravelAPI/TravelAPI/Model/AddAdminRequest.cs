using System.ComponentModel.DataAnnotations;
using TravelAPI.Model;
namespace TravelAPI.Model;

public class AddAdminRequest
{
    
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }

}
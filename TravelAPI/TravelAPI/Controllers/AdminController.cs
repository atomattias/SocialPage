using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TravelAPI.Data;
using TravelAPI.Model;

namespace TravelAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : Controller
    {
        private readonly MvcAdminContext _context;

        public AdminController(MvcAdminContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmin()
        {
            return await _context.Admin.ToListAsync();
        }
        // GET: Admin
        [HttpGet("id")]
        public async Task<ActionResult<Admin>> GetAdmin(int id)
        {
            var sAdmin = await _context.Admin.FindAsync(id);
            if (sAdmin == null)
            {
                return NotFound();
            }

            return sAdmin;
        }


        // Post: Api/Participants
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdmin([FromRoute] Guid id, UpdateAdminRequest updateAdminRequest)
        {
            var admin = await _context.Admin.FindAsync(id);
            if (admin != null)
            {
                admin.Name = updateAdminRequest.Name;
                admin.Email = updateAdminRequest.Email;
                admin.Password = updateAdminRequest.Password;
            }



            await _context.SaveChangesAsync();



            return Ok(admin);
        }

        [HttpPost]
        public async Task<ActionResult<Admin>> AddAdmin(AddAdminRequest addAdminRequest)
        {
            var admin = new Admin()
            {
                Id = Guid.NewGuid(),
                Name = addAdminRequest.Name,
                Email = addAdminRequest.Email,
                Password = addAdminRequest.Password
            };
            await _context.Admin.AddAsync(admin);
            await _context.SaveChangesAsync();

            return Ok(admin);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Admin>> DeleteAdmin(int id)
        {
            var admin = await _context.Admin.FindAsync(id);
            if (admin != null)
            {

                _context.Admin.Remove(admin);
                await _context.SaveChangesAsync();
                return Ok(admin);
            }

            return NotFound();
        }

        


    }
}

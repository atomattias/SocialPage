using Microsoft.EntityFrameworkCore;
using TravelAPI.Model;

namespace TravelAPI.Data;

public class MvcAdminContext : DbContext
{
    public MvcAdminContext (DbContextOptions<MvcAdminContext> options)
        : base(options)
    {
    }

    public DbSet<Admin> Admin { get; set; } = default!;
}
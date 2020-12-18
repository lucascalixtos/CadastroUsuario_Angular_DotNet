using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CRUD_BASICO.Model;

namespace CRUD_BASICO.Data
{
    public class CRUD_BASICOContext : DbContext
    {
        public CRUD_BASICOContext (DbContextOptions<CRUD_BASICOContext> options)
            : base(options)
        {
        }

        public DbSet<CRUD_BASICO.Model.Usuario> Usuario { get; set; }
    }
}

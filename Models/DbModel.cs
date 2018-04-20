using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EF_Angular_API_CRUD.Models
{
    public class DbModel : DbContext
    {
        public DbSet<Employee> Employee { get; set; }
    }
    public class Employee
    {
        [Key]
        public int EmpNo { get; set; }
        [Required]
        public string EmpName { get; set; }
        [Required]
        public int Salary { get; set; }
        [Required]
        public string DeptName { get; set; }
        [Required]
        public string Designation { get; set; }
    }
}
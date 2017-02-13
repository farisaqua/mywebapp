using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestApi1.Areas.Person.Models
{
    public class Individual
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string JobTitle { get; set; }
    }
}
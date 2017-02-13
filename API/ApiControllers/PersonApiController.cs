using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TestApi1.Areas.Person.Models;

namespace TestApi1.Areas.Person.Controller
{
    [RoutePrefix("api/persons")]
    [EnableCorsAttribute("http://localhost:8000","*","*")]
    public class PersonApiController : ApiController
    {
        [Route("")]
        [HttpGet()]
        public IHttpActionResult GetPersons()
        {
            return Ok(new[] {
                            new Individual { FirstName = "Kazano", Id = 1, LastName = "Kazisha", JobTitle = "Architect" },
                            new Individual { FirstName = "Aqua", Id = 2, LastName = "Aqusha", JobTitle = "Developer" }
            });
        }

        [Route("{id:int}")]
        [HttpPut()]
        public IHttpActionResult UpdatePerson([FromBody]Individual person)
        {
            Console.WriteLine($"Name: {person.LastName},{person.FirstName}, Id: {person.Id}, Job title: {person.JobTitle}");
            return Ok();    // 200 Status Code
        }

      

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MaidFinderWebAPI.Model
{
    public class Candidate
    {
        [Key]
        public string CandidateID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string FirstName {get; set;}

        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CNIC { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CellNumber { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Address { get; set; }

        public City City { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Area { get; set; }



    }
}

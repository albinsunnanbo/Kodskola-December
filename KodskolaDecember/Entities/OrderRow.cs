using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KodskolaDecember.Entities
{
    public class OrderRow
    {
        [Key]
        public int OrderRowId { get; set; }

        public int Price { get; set; }

        public virtual Order Order { get; set; }
    }
}
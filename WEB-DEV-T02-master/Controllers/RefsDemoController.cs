using FresherTraining.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FresherTraining.Controllers
{
    public class RefsDemoController : ApiController
    {
        /// Thực hiện lấy dữ liệu các phiếu thu từ dữ liệu model
        /// Người tạo: VDThang
        /// Ngày tạo: 19/07/2019
        /// <returns>dữ liệu các phiếu thu</returns>
        //[Route("refs")]
        //[HttpGet]
        //public IEnumerable<Ref> Get()
        //{
        //    return Ref.Refs;
        //}

        //[Route("refs/{refno}")]
        //[HttpGet]
        //public string Get(string refno)
        //{
        //    return "value";
        //}

        //[Route("refs")]
        //[HttpPost]
        //public void Post([FromBody] Ref refitem)
        //{
        //    Ref.Refs.Add(refitem);
        //}

        //// PUT: api/Refs/5
        //[Route("refs")]
        //[HttpPut]
        //public void Put([FromBody]Ref refitem)
        //{
        //    var item = Ref.Refs.Where(p => p.refNo == refitem.refNo).FirstOrDefault();
        //    item.refDate = refitem.refDate;
        //    item.refNo = refitem.refNo;
        //    item.refType = refitem.refType;
        //    item.contactName = refitem.contactName;
        //    item.reason = refitem.reason;
        //    item.total = refitem.total;
        //}

        //// DELETE: api/Refs/5
        ////[Route("refs/{refno}")]
        ////[HttpDelete]
        ////public void Delete(string refno)
        ////{
        ////    var refitem = Ref.Refs.Where(p => p.refNo == refno).FirstOrDefault();
        ////    Ref.Refs.Remove(refitem);
        ////}

        //[Route("refs")]
        //[HttpDelete]
        //public void DeleteMultiple([FromBody]List<string> refnos)
        //{
        //    foreach(var refno in refnos)
        //    {
        //        var refitem = Ref.Refs.Where(p => p.refNo == refno).FirstOrDefault();
        //        Ref.Refs.Remove(refitem);
        //    }
        //}
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FresherTraining.Models
{
    public class Ref
    {
        public Guid refID { get; set; }
        public DateTime refDate { get; set; }
        public string refNo { get; set; }
        public string refType { get; set; }
        public decimal total { get; set; }
        public string contactName { get; set; }
        public string reason { get; set; }

        //static List<Ref> _refs = new List<Ref>()
        //{
        //    new Ref(){
        //        refDate = new DateTime(2019, 06, 14),
        //        refNo = "PT00001",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //    new Ref(){
        //        refDate = new DateTime(2019, 07, 14),
        //        refNo = "PT00002",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //    new Ref(){
        //        refDate = new DateTime(2019, 08, 14),
        //        refNo = "PT00003",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //    new Ref(){
        //        refDate = new DateTime(2019, 09, 14),
        //        refNo = "PT00004",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //    new Ref(){
        //        refDate = new DateTime(2019, 10, 14),
        //        refNo = "PT00005",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //    new Ref(){
        //        refDate = new DateTime(2019, 10, 14),
        //        refNo = "PT00006",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //    new Ref(){
        //        refDate = new DateTime(2019, 10, 14),
        //        refNo = "PT00007",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //    new Ref(){
        //        refDate = new DateTime(2019, 10, 14),
        //        refNo = "PT00008",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //    new Ref(){
        //        refDate = new DateTime(2019, 10, 14),
        //        refNo = "PT00009",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //    new Ref(){
        //        refDate = new DateTime(2019, 10, 14),
        //        refNo = "PT00010",
        //        refType = "Phiếu thu nợ tiền mặt",
        //        total = 2500000,
        //        contactName = "Vũ Đức Thắng",
        //        reason = "Thu nợ tiền áo"
        //    },
        //};

        //public static List<Ref> Refs
        //{
        //    get
        //    {
        //        return _refs;
        //    }
        //    set
        //    {
        //        _refs = value;
        //    }
        //}
    }
}
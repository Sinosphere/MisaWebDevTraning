$(document).ready(function () {
    var ref = new Ref();
    
});


class Ref extends Base {
    constructor() {
        super();
        this.InitEventsRef();
    }

    InitEventsRef() {
        $('.main-table tbody').on('click', 'tr .uncheck', this.TickRow);
        $('.toolbar').on('click', 'button.delete', this.ClickButtonDelete.bind(this));
        $('.main-table tbody').on('click', 'tr .text-left', this.RowOnClick);
        $('.toolbar').on('click', 'button.add-new', this.OpenDialogAdd);
        $('#dialog').on('click', 'button.save', this.AddNewRef.bind(this));
        $('#dialog').on('blur', 'input[property="refNo"]', this.ValidateRefno);
        $('#dialog').on('blur', 'input[property="refDate"], input[property="refType"], input[property="total"]', this.Validate);
        $('.toolbar').on('click', 'button.edit', this.OpenDialogEdit);
        $('#dialog1').on('click', 'button.save', this.EditRef.bind(this));
    }
    /**
     * Validate form
     * Người tạo: Nguyễn Đức Thiện
     * Time: 4:08PM 28/07/2019
     * */
    Validate() {
        if (this.value == '') {
           // $(this).addClass('dangerous');
            this.placeholder = 'Bạn nhập thiếu thông tin';
        }
        else {
            $(this).removeClass('dangerous');
        }
    }
    /**
     * Validate cho form refNo (tránh trường hợp trùng refNo )
     * Người tạo: Nguyễn Đức Thiện
     * Time: 9:34AM 28/07/2019
     * */
    ValidateRefno() {
        // var listRefno = $('.main-table tbody td[fieldName="refNo"]');
        var listRefno = $('.main-table tbody td[name = "refno"]');
        var l = listRefno.length;
        if (this.value == '') {
           // $(this).addClass('dangerous');
            this.placeholder = 'Bạn nhập thiếu thông tin';
        }
        else {
            $(this).removeClass('dangerous');
        }
        for (var i = 0; i < l; i++) {
            if (this.value === listRefno[i].innerHTML) {
               // $(this).addClass('dangerous');
                this.value = "";
                this.placeholder = 'Mã số này đã tồn tại';
            }
            else {
                $(this).removeClass('dangerous');

            }
        }
    }
    /**
     * Thêm dialog cho chức năng sửa
     * ng tạo: Nguyễn Đức Thiện
     * Time: 10:52PM 26/07/2019
     * */
    OpenDialogEdit() {
        $("#dialog1").dialog({
            modal: true,
            height: 400,
            width: 700
        });
        /**
         * Thêm chức năng hiện sẵn thông tin cho dòng cần chỉnh sửa
         * Người tạo: Nguyễn Đức Thiện
         * Time: 7:42AM 28/07/2019
         * */
        var listInput = $('tr.select td');
        var l = listInput.length;
        var inputvalues = $('#dialog1 input');
        for (var i = 0; i < l-1; i++) {
            inputvalues[i].value = listInput[i + 1].innerHTML;
        }     
    }
    /**
     * Chức năng sửa
     * Ng tạo: Nguyễn Đức Thiện
     * Time: 8:31 AM 27/07/2019
     * */
    EditRef() {
        var me = this;
        var listInput = $('#dialog1 [property]');
        var object = {};
        $.each(listInput, function (index, item) {
            var propertyName = item.getAttribute('property');
            var value = $(this).val();
            object[propertyName] = value;
        });
        $.ajax({
            method: 'PUT',
            url: '/refs',
            dataType: "json",
            data: JSON.stringify(object),
            contentType: "application/json; charset=utf-8",
            success: function () {
                $('#dialog1').dialog('close');
                me.loadData();
            },
            error: function () {
                alert('Không sửa được, liên hệ Misa để khắc phục!');
            },
        });
    }

   

    /**
     * Thêm mới phiếu thu
     * Người tạo: Vũ Đức Thắng
     * 
     * */
    AddNewRef() {
            var me = this;
            // Lấy các thẻ input
            var listInput = $('#dialog [property]');
            var object = {};
            $.each(listInput, function (index, item) {
                // Lấy từng thẻ input
                var propertyName = item.getAttribute('property');
                // Lấy giá trị của input
                var value = $(this).val();
                object[propertyName] = value;
            });
            $.ajax({
                method: 'POST',
                url: '/refs',
                dataType: "json",
                data: JSON.stringify(object),
                contentType: "application/json; charset=utf-8",
                success: function () {
                    $('#dialog').dialog('close');
                    me.loadData();
                },
                error: function () {
                    alert('Ngu vãi');
                },
            });
      
    }

    /**
         * Hàm thực hiện chức năng thêm mới
         * Người tạo: Nd thiện
         * Ngày tạo: 19/07/2019
         * */
    OpenDialogAdd() {
        $("#dialog").dialog({
            modal: true,
            height: 400,
            width: 700,
        });
        /**
         * Reset ô input cho dialog
         * Người tạo: Nguyễn Đức Thiện
         * Ngày tạo: 27/07/2019
         * */
        var inputvalues = $('#dialog input');
        $.each(inputvalues, function (index, item) {
            //this.value = "";  
            var a = this;
            var b = item;
            var c = $(this);
            debugger;
        });
    }
    /**
    * Thực hiện chức năng khi tích chọn 1 hàng
    * Người tạo: VDThang
    * Ngày tạo: 24/07/2019
    * */
    TickRow() {
        var row = $(this).parent();
            if (row.hasClass('tick')) {
                row.removeClass('tick')
               //$('button.delete').attr('disabled', 'disabled');
            }
            else {
                row.addClass('tick');
                $('button.delete').removeAttr('disabled');
            }
        }
  
    /**
     * Thực hiện chức năng xóa 1 bản ghi dữ liệu
     * Người tạo: VDThang
     * Ngày tạo: 19/07/2019
     * */

    ClickButtonDelete() {
        var me = this;
        var listRefID = [];
        var listRow = $('.tick[recordID]');   //,.tick[recordID]
        $.each(listRow, function (index, item) {
            var refid = item.getAttribute('recordID');
            listRefID.push(refid);
        });
        $.ajax({
            method: 'DELETE',
            url: '/refs',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(listRefID),
            success: function (res) {
                me.loadData();
                me.SetStatusButton();
            },
            error: function (res) {
                alert("Không xóa được, dịch vụ đang bị lỗi. Liên hệ với MISA để làm việc");
            }
        });
    }



    /**
     * Thực hiện chức năng khi chọn 1 hàng
     * Người tạo: VDThang
     * Ngày tạo: 19/07/2019
     * */
    RowOnClick() {
        var row = $(this).parent();
            if (row.hasClass('select')) {
                row.removeClass('select')
                $('button.edit').attr('disabled', 'disabled');

            }
            else {
                $('tr').removeClass('select');
                row.addClass('select');
                $('button.edit').removeAttr('disabled');
            }
    }
    /**
     * 
     * 
     * */
    SetStatusButton() {
        var size = $('.main-talbe tbody tr').length;
        if (size === 0) {
            $('button.delete').attr('disabled', 'disabled');
        }
    }
}


document.getElementById('btnSapXep').onclick = function () {
    var soThu1 = document.getElementById('soThu1').value;
    var soThu2 = document.getElementById('soThu2').value;
    var soThu3 = document.getElementById('soThu3').value;
    var ketQua = ''
    if (soThu3 > soThu2 && soThu2 > soThu1) {
        ketQua = soThu1 + '<' + soThu2 + '<' + soThu3;
    } else if (soThu2 > soThu3 && soThu3 > soThu1) {
        ketQua = soThu1 + '<' + soThu3 + '<' + soThu2;
    } else if (soThu1 > soThu3 && soThu3 > soThu2) {
        ketQua = soThu2 + '<' + soThu3 + '<' + soThu1;
    } else if (soThu3 > soThu1 && soThu1 > soThu2) {
        ketQua = soThu2 + '<' + soThu1 + '<' + soThu3;
    } else if (soThu1 > soThu2 && soThu2 > soThu3) {
        ketQua = soThu3 + '< ' + soThu2 + '<' + soThu1;
    } else if (soThu2 > soThu1 && soThu1 > soThu3) {
        ketQua = soThu3 + '<' + soThu1 + '<' + soThu2
    }
    document.getElementById('sapXepSo').innerHTML = ketQua;
}


// bai 2
document.getElementById('guiLoiChao').onclick = function () {
    var chonThanhVien = document.getElementById('chonThanhVien').value;
    var loiChao = '';
    if (chonThanhVien == 2) {
        loiChao = 'Con chao bo';
    } else if (chonThanhVien == 3) {
        loiChao = 'con chao me';
    } else if (chonThanhVien == 4) {
        loiChao = 'Em chao Anh';
    } else if (chonThanhVien = 5) {
        loiChao = ' Anh chao em';
    }


    document.getElementById('thongBaoChao').innerHTML = loiChao;
}



//bai3



document.getElementById('btnSapXepSoChanLe').onclick = function () {
    var soThuNhat = document.getElementById('soThuNhat').value * 1;
    var soThuHai = document.getElementById('soThuHai').value * 1;
    var soThuBa = document.getElementById('soThuBa').value * 1;
    var ketQuaChanLe = '';
    if (soThuNhat % 2 == 0 && soThuHai % 2 == 0 && soThuBa % 2 == 0) {
        ketQuaChanLe = 'co 3 so chan, 0 so le';
    } else {
        ketQuaChanLe = 'co 3 so le,0 so chan';
    }
    if (soThuNhat % 2 == 0 && soThuHai % 2 == 0 || soThuHai % 2 == 0 && soThuBa % 2 == 0 || soThuNhat % 2 == 0 && soThuBa % 2 == 0) {
        ketQuaChanLe = 'co 2 so chan,1 so le';
    } else {
        ketQuaChanLe = 'co 1 so chan,2 so le';
    }
    document.getElementById('sapXepSoChanLe').innerHTML = ketQuaChanLe;

}

//bai 4
document.getElementById('btnTamGiac').onclick = function () {
    var canhThuNhat = document.getElementById('canhThuNhat').value * 1;
    var canhThuHai = document.getElementById('canhThuHai').value * 1;
    var canhThuBa = document.getElementById('canhThuBa').value * 1;
    var tamGiac = '';
    if (canhThuNhat == canhThuHai && canhThuBa != canhThuHai || canhThuNhat == canhThuBa && canhThuHai != canhThuBa || canhThuBa == canhThuHai && canhThuNhat != canhThuHai) {
        tamGiac = 'Tam Giac Can';
    } else if (canhThuBa == canhThuHai == canhThuNhat) {
        tamGiac = 'Tam Giac Deu';
    } else if ((canhThuNhat * canhThuNhat) + (canhThuHai * canhThuHai) == canhThuBa * canhThuBa || (canhThuNhat * canhThuNhat) + (canhThuBa * canhThuBa) == canhThuHai * canhThuHai || (canhThuBa * canhThuBa) + (canhThuHai * canhThuHai) == canhThuNhat * canhThuNhat) {
        tamGiac = 'Tam Giac Vuong';
    } else {
        tamGiac = 'Mot Tam GIac Nao Do';
    }
    document.getElementById('loaiTamGiac').innerHTML = tamGiac;
}

//bai 5

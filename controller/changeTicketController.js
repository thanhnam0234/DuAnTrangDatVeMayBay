window.changeTicketController = function (
    $scope,
    $http,
    $routeParams,
    $location,
) {
    $scope.title = 'Chỉnh sửa đơn hàng';

    function getData() {
        const apisanpham = 'http://localhost:3000/sanpham';
        $http.get(apisanpham).then(function (response) {
            if (response.status == 200) {
                console.log(response.data);
                $scope.sanpham = response.data;
            }
        });
    }
    getData();
 
    // Lấy thông tin chi tiết dien thoai
    let dienthoaiID = $routeParams.id;
    const apidienthoai = 'http://localhost:3000/dienthoai';
    $http.get(`${apidienthoai}/${dienthoaiID}`).then(function (response) {
        if (response.status == 200) {
            console.log(response.data);
            $scope.dienthoai = {
                editID: response.data.id,
                ten:  response.data.ten,
                cmt:  response.data.cmt,
                email:  response.data.email,
                gioiTinh:  response.data.gioiTinh,
                sdt:  response.data.sdt,
                
            };
        }
    });


    $scope.changeDienthoai = function () {
        // Tạo 1 biến để kiểm tra
        let flag = true;
        // Kiểm tra từng trường dữ liệu
        $scope.kiemTra = {
            ten: false,
            cmt: false,
            email: false,
            gioiTinh: false,
            sdt: false,
        };
        // Kiểm tra dữ liệu
        if (!$scope.dienthoai || !$scope.dienthoai.ten) {
            console.log(!$dienthoai.ten)
            flag = false;
            $scope.kiemTra.ten = true;
        }
        if (!$scope.dienthoai || !$scope.dienthoai.cmt) {
            console.log(!$scope.dienthoai.cmt)
            flag = false;
            $scope.kiemTra.cmt = true;
        }
        if (!$scope.dienthoai || !$scope.dienthoai.email) {
            console.log(!$scope.dienthoai.email)
            flag = false;
            $scope.kiemTra.email = true;
        }
        if (!$scope.dienthoai || !$scope.dienthoai.gioiTinh) {
            console.log(!$scope.dienthoai.gioiTinh)
            flag = false;
            $scope.kiemTra.gioiTinh = true;
        }
        if (!$scope.dienthoai || !$scope.dienthoai.sdt) {
            console.log(!$scope.dienthoai.sdt)
            flag = false;
            $scope.kiemTra.sdt = true;
        }

        console.log(flag)

        if (flag) {
            // Dữ liệu nhập từ input
            let updatedienthoai = {
                ten: $scope.dienthoai.ten,
                cmt: $scope.dienthoai.cmt,
                email: $scope.dienthoai.email,
                sdt: $scope.dienthoai.sdt,
                gioiTinh: $scope.dienthoai.gioiTinh,
            };
            console.log(updatedienthoai);
            $http
                .put(`${apidienthoai}/${dienthoaiID}`, updatedienthoai)
                .then(function (response) {
                    if ((response.status = 201)) {
                        $location.path('trang-chu');
                    }
                });
        } else {
            alert('Bạn cần nhập đầy đủ thông tin để có thể đổi vé !');
        }
    };
};

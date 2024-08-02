window.bookingController = function ($scope, $http, $location, $routeParams) {
    $scope.title = 'Trang đặt hàng';

    const apisanpham = 'http://localhost:3000/sanpham';
    let sanphamID = $routeParams.id;
    $http.get(`${apisanpham}/${sanphamID}`).then(function (response) {
        console.log(response.data);
        $scope.sanpham = {
            title: response.data.title,
            text: response.data.text,
            color: response.data.color,
        };
    });


    $scope.sanpham = function () {
        const apidienthoai = 'http://localhost:3000/dienthoai';

        let flag = true;
        $scope.kiemTra = {
            editID: false,
            ten: false,
            cmt: false,
            email: false,
            gioiTinh: false,
            sdt: false,
        };

        if (flag) {
            if (!$scope.sanpham || !$scope.sanpham.ten) {
                flag = false;
                $scope.kiemTra.ten = true;
            }
            if (!$scope.sanpham || !$scope.sanpham.cmt) {
                flag = false;
                $scope.kiemTra.cmt = true;
            }
            if (!$scope.sanpham || !$scope.sanpham.email) {
                flag = false;
                $scope.kiemTra.email = true;
            }
            if (!$scope.sanpham || !$scope.sanpham.gioiTinh) {
                flag = false;
                $scope.kiemTra.gioiTinh = true;
            }
            if (!$scope.sanpham || !$scope.sanpham.sdt) {
                flag = false;
                $scope.kiemTra.sdt = true;
            }

            if (flag) {
                let newsanpham = {
                    ten: $scope.sanpham.ten,
                    cmt: $scope.sanpham.cmt,
                    email: $scope.sanpham.email,
                    gioiTinh: $scope.sanpham.gioiTinh,
                    sdt: $scope.sanpham.sdt,
                };

                $http.post(apidienthoai, newsanpham).then(function (response) {
                    if (response.status == 201) {
                        $location.path('trang-chu');
                    } else {
                        alert('Bạn cần nhập đầy đủ thông tin để có thể đặt vé');
                    }
                });
            }
        }
    };
};

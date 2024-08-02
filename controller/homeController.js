window.homeController = function ($scope, $http) {
    $scope.Title = 'Đơn hàng đã mua';
    
    // call API
    const apidienthoai = 'http://localhost:3000/dienthoai';
    const apisanpham = 'http://localhost:3000/sanpham';

    function getData() {
        $http.get(apisanpham).then(function (response) {
            if (response.status == 200) {
                console.log(response.data);
                $scope.sanpham = response.data;

                // Xếp 3 hàng vào 1 cột
                $scope.groups = [];
                for (let i = 0; i < $scope.sanpham.length; i += 3) {
                    $scope.groups.push($scope.sanpham.slice(i, i + 3));
                }
            }
        });

        $http.get(apidienthoai).then(function (response) {
            if (response.status == 200) {
                console.log(response.data);
                $scope.dienthoai = response.data;
            }
        });
    }
    getData();

    // Delete
    $scope.deletesanpham = function (deleteID) {
        if (deleteID) {
            let confirm = window.confirm('Bạn có chắc chắn muốn xóa không? ');
            if (confirm) {
                $http
                    .delete(`${deletesanpham}/${deleteID}`)
                    .then(function (response) {
                        if (response.status == 200) {
                            alert('xóa thành công');
                        }
                    });
            }
        }
    };
};

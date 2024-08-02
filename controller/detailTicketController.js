window.detailTicketController = function ($scope, $routeParams, $http) {
    $scope.title = 'Thông tin đơn hàng';

    // lấy thông tin chi tiết
    let dienthoaiID = $routeParams.id;

    // link api
    const apidienthoai = 'http://localhost:3000/dienthoai';
    $http.get(`${apidienthoai}/${dienthoaiID}`).then(function (response) {
        console.log(response.data);
        $scope.ticket = {
            editID: response.data.id,
            ten: response.data.ten,
            cmt: response.data.cmt,
            email: response.data.email,
            gioiTinh: response.data.gioiTinh,
            sdt: response.data.sdt,
        };
    });
};

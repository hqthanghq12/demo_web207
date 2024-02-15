window.AddPhoneController = function ($scope, $http, $location){
    $scope.title = "THÊM ĐIỆN THOAI";
     // Thực hiên call api
     const apiPhone = "http://localhost:3000/phone";
     // Thông báo lỗi
     $scope.kiemTraDuLieu = { // mặc định chưa gặp lỗi thì là flase
        ten : false,
        hang: false,
        gia: false,
        id: false
     }
     $scope.onClose = function(){ // reset sau thêm
        $scope.inputValue = {
            ten : "",
            hang: "",
            gia: "",
            id: ""
        }

     }
     $scope.onSubmitFormAdd = function(){
        // Validate
        let flag = false;
        // Kiểm tra xem người đã nhập id hay chưa
        if(!$scope.inputValue || !$scope.inputValue.id){
            // có lỗi
            $scope.kiemTraDuLieu.id = true;
            flag = true;
        }
        // Kiểm tra xem người đã nhập tên hay chưa
        if(!$scope.inputValue || !$scope.inputValue.ten){
            // có lỗi
            $scope.kiemTraDuLieu.ten = true;
            flag = true;
        }
        // Kiểm tra xem người đã nhập giá hay chưa
        if(!$scope.inputValue || !$scope.inputValue.gia){
            // có lỗi
            $scope.kiemTraDuLieu.gia = true;
            flag = true;
        }
        // Kiểm tra xem người đã nhập giá có lớn hơn 100
        if(parseInt($scope.inputValue.gia) <= 100){
            // có lỗi
            $scope.kiemTraDuLieu.giaLon = true;
            flag = true;
        }
        // Validate năm sinh và chuyên -> bài tập
        if(!flag){
             let idADD = $scope.inputValue.id;
            let newItem = {
                ten : $scope.inputValue.ten,
                hang: $scope.inputValue.hang,
                gia: $scope.inputValue.gia,
                id: $scope.inputValue.id
            }
            // Thêm thì dùng phương thức post
            $http.post(
                apiPhone, // Đường dẫn API
                newItem
            ).then(
                function(response){
                    // console.log(response);
                    if(response.status == 201){
                        $location.path(`/detail/phone/${idADD}`);
                    }
                }
            )
            $scope.onClose();
        }
     }
   
}
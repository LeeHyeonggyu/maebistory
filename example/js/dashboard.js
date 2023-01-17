$(document).ready(function(){

    // 20221108 달력 메뉴 클릭시 날짜 설정 박스
    $(".tab-name-0 .calander").each(function(){
        if($(this).hasClass("active") === true) {
            $(".infor-setting-area-1 .left-area .sub-text, .infor-setting-area-1 .left-area .date-select-area, .infor-setting-area-1 .left-area .prev-btn, .infor-setting-area-1 .left-area .date-text-select-box, .infor-setting-area-1 .left-area .next-btn").addClass("invisible");
        }
    });
    $(".smalltab > li > a").click(function(){
        $(".infor-setting-area-1 .left-area .sub-text, .infor-setting-area-1 .left-area .date-select-area, .infor-setting-area-1 .left-area .prev-btn, .infor-setting-area-1 .left-area .date-text-select-box, .infor-setting-area-1 .left-area .next-btn").removeClass("invisible");
    });
    $(".tab-name-0 .calander").click(function(){
        $(".infor-setting-area-1 .left-area .sub-text, .infor-setting-area-1 .left-area .date-select-area, .infor-setting-area-1 .left-area .prev-btn, .infor-setting-area-1 .left-area .date-text-select-box, .infor-setting-area-1 .left-area .next-btn").addClass("invisible");
    });




    // 데이트피커
    $(function() {
        $("#datepicker-1, #datepicker-2,#datepicker-3, #datepicker-4,#datepicker-5, #datepicker-6,#datepicker-7, #datepicker-8").datepicker({
            dateFormat: 'yy-mm-dd',
            prevText: '이전 달',
            nextText: '다음 달',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNames: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            showMonthAfterYear: true,
            yearSuffix: '년',
            minDate: "-1Y",
            maxDate: "+1y",
            showOn:"both",
            buttonImage:"../img/ico-date.svg",
            buttonImageOnly:true
        });                    
    
        $('#datepicker-1, #datepicker-3,#datepicker-5, #datepicker-7').datepicker('setDate', '-7d');

        $('#datepicker-2, #datepicker-4, #datepicker-6, #datepicker-8').datepicker('setDate', 'today');           
    });

    // 데이트 텍스트 선택 박스
    $(".date-text-select-box li").click(function(){
        $(".date-text-select-box li").removeClass("active");
        $(this).addClass("active");
    });

    // 사이드 메뉴 박스
    $(".dashboard-area .top-area .left-area .ham-btn").click(function(){
        $(".side-menu-box").addClass("active");
    });

    $(".dashboard-area .infor-setting-area-4 .left-area .ham-btn").click(function(){
        $(".side-menu-box").addClass("active");
    });

    $(".side-menu-box .x-btn").click(function(){
        $(".side-menu-box").removeClass("active");
    });

    // 텝메뉴
    $(".tab-menu-box > li:not("+$(".tab-name-box > li > a.active").attr("href")+")").hide();
			
    $(".tab-name-box > li > a").click(function(){ 
        
        $(".tab-name-box > li > a").removeClass("active"); 			
        $(this).addClass("active");	
			
        $(".tab-menu-box > li").hide(); 

        $($(this).attr("href")).show(); 

        return false;       
    });   

    // 은행 선택
    $(".open-banking-area .content-area .list-3 .content-box .content-box-in .bank-list").click(function(){
        $(".open-banking-area .content-area .list-3 .content-box .content-box-in .bank-list").removeClass("active");
        $(this).addClass("active");
    });

    $(".open-banking-area .content-area .list-2 .bank-select-btn").click(function(){
        $(".open-banking-area .content-area .list-3").addClass("active");
    });

    // 팝업 공통
    $(".pop-up-area .pop-up-box .cancle-text").click(function(){
        $(".pop-up-area, .pop-up-area .pop-up-box").removeClass("active");
    });


     // 20220808기준 팝업이 필요없게되어 이용안함 //
    //  // 주문앱선정산 예시데이터 알림
    // $(".order-app-selection-area").after(function(){
    //     $(".pop-up-area, .pop-up-area .dummydata-pop-up-box").addClass("active");
    // });
     // 20220808기준 팝업이 필요없게되어 이용안함 //

    // 홈택스 예시데이터 알림
    $(".tax-area-notop").after(function(){
        $(".pop-up-area, .pop-up-area .hometax-comingsoon-pop-up-box").addClass("active");
    });
    
    // 홈택스 로그인
    $(".tax-area-notop .tab-menu-area .hometax-btn").click(function(){
        $(".pop-up-area, .pop-up-area .hometax-login-pop-up-box").addClass("active");
    });

    /*20221108 매출분석에 추가함 */

    // 모든 주문앱 로그인
    $(".sales-boonsuck-area-notop .plus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .moden-login-pop-up-box").addClass("active");
    });

        // 모든 주문앱 로그인 - 배달의민족 로그인
        $(".pop-up-area .appadd-baemin-btn").click(function(){
            $("#close1").removeClass("active")
            $(".pop-up-area, .pop-up-area .baedal-ui-minjog-login-pop-up-box").addClass("active");
        });

        // 모든 주문앱 로그인 - 요기요 사장님사이트 로그인
        $(".pop-up-area .appadd-yogiyo-ceosite-btn").click(function(){
            $("#close1").removeClass("active");
            $(".pop-up-area, .pop-up-area .yogiyo-ceosite-login-pop-up-box").addClass("active")
        });

        // 모든 주문앱 로그인 - 요기요 주문접수 로그인
        $(".pop-up-area .appadd-yogiyo-btn").click(function(){
            $("#close1").removeClass("active")
            $(".pop-up-area, .pop-up-area .yogiyo-login-pop-up-box").addClass("active");
        });
        
        // 모든 주문앱 로그인 - 쿠팡이츠 로그인
        $(".pop-up-area .appadd-coopang-btn").click(function(){
            $("#close1").removeClass("active")
            $(".pop-up-area, .pop-up-area .cupang-icheu-login-pop-up-box").addClass("active");
        });   

        // 모든 주문앱 로그인 - 기타
        $(".pop-up-area .appadd-kitah-btn").click(function(){
            $("#close1").removeClass("active")
            $(".pop-up-area, .pop-up-area .kitah-login-pop-up-box").addClass("active");
        });        



    // 배달의 민족
    $(".order-app-selection-area .tab-menu-area .tab-name-box > .tab-name-1 .plus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .baedal-ui-minjog-login-pop-up-box").addClass("active");
    });

    $(".order-app-selection-area .tab-menu-area .tab-name-box > .tab-name-1 .minus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .baedal-ui-minjog-disconnect-pop-up-box").addClass("active");
    });

    // 요기요
    $(".order-app-selection-area .tab-menu-area .tab-name-box > .tab-name-2 .plus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .yogiyo-login-pop-up-box").addClass("active");
    });

    $(".order-app-selection-area .tab-menu-area .tab-name-box > .tab-name-2 .minus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .yogiyo-disconnect-pop-up-box").addClass("active");
    });

    // 쿠팡이츠
    $(".order-app-selection-area .tab-menu-area .tab-name-box > .tab-name-3 .plus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .kupang-icheu-login-pop-up-box").addClass("active");
    });

    $(".order-app-selection-area .tab-menu-area .tab-name-box > .tab-name-3 .minus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .kupang-icheu-disconnect-pop-up-box").addClass("active");
    });

    // 배달특급
    $(".order-app-selection-area .tab-menu-area .tab-name-box > .tab-name-4 .plus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .baedal-teuggeub-login-pop-up-box").addClass("active");
    });

    $(".order-app-selection-area .tab-menu-area .tab-name-box > .tab-name-4 .minus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .baedal-teuggeub-disconnect-pop-up-box").addClass("active");
    });

    // 로그인 실패
    $(".login-pop-up-box .login-btn").click(function(){
        $(".pop-up-area, .pop-up-area .login-fail-pop-up-box").addClass("active");
    });
    // 기타주문경로 연결버튼
    $(".login-pop-up-box .connect-btn").click(function(){
        $(".pop-up-area, .pop-up-area .kitah-login-pop-up-box").removeClass("active");
    });

    $(".pop-up-area .login-fail-pop-up-box .btn-type-2 .btn-1").click(function(){
        $(".pop-up-area .login-fail-pop-up-box").removeClass("active");
    });

    // 하나은행
    $(".bankbook-transaction-history-area .tab-menu-area .tab-name-box > .tab-name-1 .minus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .hana-disconnect-pop-up-box").addClass("active");
    });

    // 신한은행
    $(".bankbook-transaction-history-area .tab-menu-area .tab-name-box > .tab-name-2 .minus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .sinhan-disconnect-pop-up-box").addClass("active");
    });

    // 우리은행
    $(".bankbook-transaction-history-area .tab-menu-area .tab-name-box > .tab-name-3 .minus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .woori-disconnect-pop-up-box").addClass("active");
    });

    // 케이뱅크
    $(".bankbook-transaction-history-area .tab-menu-area .tab-name-box > .tab-name-4 .minus-btn").click(function(){
        $(".pop-up-area, .pop-up-area .k-disconnect-pop-up-box").addClass("active");
    });

    // 연결 해제
    $(".disconnect-pop-up-box .btn-type-2 .btn").click(function(){
        $(".pop-up-area, .disconnect-pop-up-box").removeClass("active");
    });

    // 선정산
    // $(".order-app-selection-area .table-area .table-box table td .btn-3").click(function(){
    //     $(".pop-up-area, .beforehand-calculate-pop-up-box").addClass("active");
    // });
 
    // $(".beforehand-calculate-pop-up-box .btn-type-2 .btn").click(function(){
    //     $(".pop-up-area, .beforehand-calculate-pop-up-box").removeClass("active");
    // });

    // 영수증
    $(".delivery-charge-inquiry-area .table-area .table-box table td .btn-1").click(function(){
        $(".pop-up-area, .receipt-pop-up-box").addClass("active");
    });

    $(".receipt-pop-up-box .x-btn").click(function(){
        $(".pop-up-area, .receipt-pop-up-box").removeClass("active");
    });

        // 영수증(상단바없는)
        $(".delivery-charge-inquiry-notop-area .table-area .table-box table td .btn-1").click(function(){
            $(".pop-up-area, .receipt-pop-up-box").addClass("active");
        });
    
        $(".receipt-pop-up-box .x-btn").click(function(){
            $(".pop-up-area, .receipt-pop-up-box").removeClass("active");
        });


    // // 홈택스 로그인
    // $(".dashboard-area .tab-menu-area .tab-menu-box .element").click(function(){
    //     $(this).toggleClass("active");
    // });


});


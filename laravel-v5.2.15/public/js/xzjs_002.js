 
 var topLevelDomain = "xiaozhu.com";
var domain = "www.xiaozhu.com";
var webimIframUrl = "http://xiaozhu.com/webim.html";
var uploadImageUrl = "http://image2.xiaozhustatic2.com/imgin4uploadify.php";
var jciUrl = "http://jci.xiaozhustatic1.com";
var webimYUI = "{{{webimYUI}}}";
var webimV2 = "{{{webimV2}}}";
var client_id_youku = '16edde5f79e61324'; 

document.domain = topLevelDomain;

var hostArray = window.location.hostname.split('.');
if (hostArray.length == 5 && hostArray[2] == 'partner') {
    topLevelDomain = hostArray[1] + '.' + hostArray[2] + '.xiaozhu.com';
} else if (hostArray.length == 4 && hostArray[1] == 'partner') {
    topLevelDomain = hostArray[0] + '.' + hostArray[1] + '.xiaozhu.com';
}

if (typeof(window.jQuery) != "undefined")
{
    if ($("#head_newmsg2"))
    {
        $("#head_newmsg2").hover(
            function () {
                $("#head_newmsg2 a.icon_arrowB").addClass("nav_current");
                $("#head_newmsg2 a.icon_arrowB").removeClass("icon_arrowB");
                $("#head_newmsg2 div.nav_pop ").show();
            },
            function () {
                $("#head_newmsg2 a.nav_current").addClass("icon_arrowB");
                $("#head_newmsg2 a.nav_current").removeClass("nav_current");
                $("#head_newmsg2 div.nav_pop ").hide();
            }
        );
    }
}

function tipBackyardSuccess(classname)
{
    if (typeof(classname) == 'undefined' || classname == '')
        classname = 'tips_right';

    $('.'+classname).show();

    var displayText = 3;
    var showtime=setInterval(function(){
    if(displayText>0)
    {
        displayText--;
        $('.'+classname).show();
    }
    else {
        $('.'+classname).hide();
        clearInterval(showtime);
    }
    },1000);
}

function tipBackyardError(errmsg,classname)
{
    if (typeof(classname) == 'undefined' || classname == '')
        classname = 'tips_error';

    $('.'+classname).html(errmsg);
    $('.'+classname).show();

    var displayText = 3;
    var showtime=setInterval(function(){
    if(displayText>0)
    {
        displayText--;
        $('.'+classname).show();
    }
    else {
        $('.'+classname).hide();
        clearInterval(showtime);
    }
    },1000);
}

function tipBackyardReset(classnameSucc, classnameErr)
{
    if (typeof(classnameSucc) == 'undefined' || classnameSucc == '')
        classnameSucc = 'tips_right';
    $('.'+classnameSucc).hide();

    if (typeof(classnameErr) == 'undefined' || classnameErr == '')
        classnameErr = 'tips_error';
    $('.'+classnameErr).hide();

}
function loadNyroModal()
{
}
 
 var XZWebUrlWriter = {
    getWebPhp : function () {
        return 'xzweb.php';
    },
    getAjaxPhp : function () {
        return 'ajax.php';
    },
    getRequest : function(url,type) {
        var nexturl = $('input[name=next]').val();
        //if (nexturl).next = nexturl;
        var returnData;
        type = (type == undefined) ? 'json' : type;
       
        $.ajax({
            type     : "GET",
            url      : url,
            dataType : type,
            async    : false,
            data     : {'_':Math.random()},
            success  : function(datas){returnData = datas;},
            error : function (XMLHttpRequest, textStatus, errorThrown){
                alert('网络错误,请刷新页面重试:'+textStatus);
            }
        });
        return returnData;
    },
    postRequest : function(url,requestParam) {
        if (!requestParam) var requestParam = {};
        var nexturl = $('input[name=next]').val();
        if (nexturl) requestParam.next = nexturl;
        var returnData;
        $.ajax({
            type     : "POST",
            url      : url,
            data     : requestParam,
            dataType : 'json',
            async    : false,
            success  : function(datas){returnData = datas;},
            error : function (XMLHttpRequest, textStatus, errorThrown){
                alert('网络错误,请刷新页面重试:'+textStatus);
            }
        });
        return returnData;
    },
    getWebIm_ServerUrl: function() {
        return 'http://'+domain+'/webim.php?op=getServerUrl';
    },
    getWebIm_DrawIframeUrl : function (userid) {
        return 'http://'+domain+'/webim.php?op=drawIframe&userid=' + userid;
    },
    getWebIm_DrawBaseBtnUrl: function(next) {
        return 'http://'+domain+'/webim.php?op=drawImBaseBtn&next=' + next;
    },
    getWebIm_DrawZhunaIframeUrl : function () {
        return 'http://'+domain+'/webim.php?op=drawZhunaIframe';
    },
    getWebIm_IframeUrl : function (userId) {
        return webimIframUrl;
    },
    getWebIm_LodgeUnitData: function (roomid) {
        return 'http://'+domain+'/webim.php?op=getLodgeUnitData&roomid=' + roomid;
    },
    getWebIm_FavoriteList: function (userid) {
        return 'http://'+domain+'/webim.php?op=getFavoriteList&userid=' + userid;
    },
    getWebIm_RequestNotificationUrl : function (userid) {
        return 'http://'+domain+'/webim.php?op=getNotification&terminal=all_web&userid=' + userid;
    },
    getWebIm_RequestUserSysNoticeCnt : function (userid, userrole) {
        return 'http://'+domain+'/webim.php?op=getUserSysNoticeCnt&userid=' + userid + '&userrole=' + userrole;
    },
    getWebIm_RequestUserSysNotice : function (userid, userrole) {
        return 'http://'+domain+'/webim.php?op=getUserSysNotice&userid=' + userid + '&userrole=' + userrole;
    },
    getWebIm_UserData : function(userid) {
        return 'http://'+domain+'/webim.php?op=getUserData&userid=' + userid;
    },
    getWebIm_talkHis : function(isTenant,offset,length) {
        return 'http://'+doamin+'/webim.php?op=loadTalkHis&isTenant=' + isTenant + '&offset=' + offset + '&length=' + length + '&userId=' + currentUser; 
    },
    getWebIm_talkMagHis: function(tenantId,luId,length,lastMessageId) {
        return 'http://'+domain+'/webim.php?op=loadTalkMsgHis&tenantId= ' + tenantId + '&luId=' + luId +'&length=' + length + '&lastMessageId= ' + lastMessageId;
    },
    getWebIm_TalkHisUrl : function (landlordid, tenantid, objid, userid) {
        return 'http://'+domain+'/webim.php?op=getTalkHisUrl&landlordid=' + landlordid + '&tenantid=' + tenantid + '&objid=' + objid + '&userid=' + userid + '&_t=' + new Date().getTime();
    },
    getWebIm_RequestFastReplyUrl : function (userid) {
        return 'http://'+domain+'/webim.php?op=getFastReply&userid=' + userid + '&_t=' + new Date().getTime();
    },
    getWebIm_FangDongSpecialLodgeUnitUrl : function (userid) {
        return "http://" + topLevelDomain + "/fangdong/" + userid +"/fangzi.html";
    },
    getWebIm_RequestRecommendLuUrl : function (userid) {
        return 'http://'+domain+'/webim.php?op=getRecommendLuList&userid=' + userid;
    },
    getWebIm_RequestUserStateUrl : function (userid,imuserrole) {
        return 'http://'+domain+'/webim.php?op=getUserState&userid=' + userid + '&imuserrole=' + imuserrole;
    },
    getWebIm_RequestSynTalkMsgUrl: function (userid,synMinTime,synMaxTime) {
        return 'http://'+domain+'/webim.php?op=SynTalkMsg&userId=' + userid + '&synMinTime=' + synMinTime + '&synMaxTime=' + synMaxTime;
    },
    getWebIm_RequestTalkMsgSetRead: function(tenantId,luId,isTenant) {
        return 'http://'+domain+'/webim.php?op=talkMsgSetRead&tenantId=' + tenantId + '&luId=' + luId + '&isTenant=' + isTenant + '&_t=' + new Date().getTime();
    },
    getWebIm_AlipayTrustZMInfoPair : function (applyUserId,ownerUserId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetZminfo_Pair&applyUserId=' + applyUserId + '&ownerUserId='+ownerUserId+'&_t=' + new Date().getTime();
    },
    getWebIm_AlipayTrustLayer : function (landlordid) {
        return 'http://'+domain+'/webim.php?op=getAlipayTrustLayer&landlordid=' + landlordid + '&_t=' + new Date().getTime();
    },
    getWebIm_CheckKeywordUrl : function (dataArr, type) {
        return 'http://greatwall.xiaozhu.com/greatwall.php?content=' + JSON.stringify(dataArr) + '&type=' + type + '&_t=' + new Date().getTime();
    },
    getWebIm_AllFriendAndLuData : function (allfriendid,allluid) {
        return 'http://'+domain+'/webim.php?op=getAllFriendAndLuData&userlist=' + allfriendid + '&lulist=' + allluid + '&_t=' + new Date().getTime();
    },
    getWeb_NoticeReachedFeedbackUrl : function (timerid,operate) {
        return 'http://'+domain+'/xzweb.php?op=NotificationReachedFeedback&timerid=' + timerid + '&operate=' + operate;
    },

    getWeb_InfoEventReachUrl : function (timerid,operate,receiverId) {
        return 'http://'+domain+'/xzweb.php?op=InfoEventReach&timerid=' + timerid + '&operate=' + operate + '&receiverid='+receiverId;
    },

    getInfoEventDealActionUrl : function (dealaction,objid,objtype,receiverid,displaystrategy) {
        return 'http://'+domain+'/xzweb.php?op=GetInfoEventDealActionUrl&dealaction=' + dealaction + '&objid=' + objid + '&objtype=' + objtype + '&receiverid=' + receiverid + '&displaystrategy='+displaystrategy;
    },

    getWeb_FangDong_FangDong_ShowLetter: function() {
        return 'http://'+domain+'/xzweb.php?op=FangDong_ShowLetter';
    },
    getWeb_FangKe_FangKe_ShowLetter: function() {
        return 'http://'+domain+'/xzweb.php?op=FangKe_ShowLetter';
    },
    getWeb_FangKe_Special_Index: function(tenantid) {
        return 'http://'+domain+'/xzweb.php?op=Front_FangKe_Special_Index&tenantid=' + tenantid;
    },
    getWeb_FangDong_Special_Index: function(landlordid) {
        return 'http://'+domain+'/xzweb.php?op=Front_FangDong_Special_Index&landlordid=' + landlordid;
    },
    getWeb_FangDong_ResetFastReplyUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangDong_ChatSet';
    },
    getWeb_FangDong_NoticeUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangDong_ShowSysNotice';
    },
    getWeb_FangKe_NoticeUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangKe_ShowSysNotice';
    },

    getWeb_FangKe_DoPostCommentUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangKe_DoPostComment';
    },
    getWeb_FangDong_DoPostCommentUrl : function (objId,bookorderId,content,commentScore,fkTag) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_DoPostComment&objId=' + objId + '&bookorderId=' + bookorderId + '&content=' + content + commentScore + '&fkTag=' + fkTag;
    },
    getWeb_FangKe_IndexUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangKe_Index';
    },
    getWeb_FangDong_IndexUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangDong_Index';
    },
    getWeb_FangKe_AddCommentUrl : function (bookorderId) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_Comment_Self&bookorderid=' + bookorderId + '&random=' + new Date().getTime();
    },
    getWeb_FangKe_DeleteTenantUrl : function (tenantId) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_DeleteUserTenant&tenantId=' + tenantId;
    },
    getWeb_FangKe_UserTenantDetailUrl : function (tenantId) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_UserTenantDetail&tenantId=' + tenantId;
    },
    getWeb_FangKe_EditUserTenantUrl : function (tenantId,realName,tenantSex,ageGroup,cardType,cardNo,yearOfBirth,monthOfBirth,dayOfBirth,mobile,phonecode) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_UpdateUserTenant&tenantId=' + tenantId + '&realName=' + realName + '&tenantSex=' + tenantSex + '&ageGroup=' + ageGroup + '&cardType=' + cardType + '&cardNo=' + cardNo + '&yearOfBirth=' + yearOfBirth + '&monthOfBirth=' + monthOfBirth + '&dayOfBirth=' + dayOfBirth + '&mobile=' + mobile + '&phonecode=' + phonecode + '&random=' + new Date().getTime();
    },
    getWeb_FangKe_EditHaiwaiUserTenantUrl : function (tenantId,realName,tenantSex,ageGroup,cardType,cardNo,yearOfBirth,monthOfBirth,dayOfBirth,email) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_UpdateUserTenant&tenantId=' + tenantId + '&realName=' + realName + '&tenantSex=' + tenantSex + '&ageGroup=' + ageGroup + '&cardType=' + cardType + '&cardNo=' + cardNo + '&yearOfBirth=' + yearOfBirth + '&monthOfBirth=' + monthOfBirth + '&dayOfBirth=' + dayOfBirth + '&email=' + email + '&random=' + new Date().getTime();
    },
    getWeb_GetCityUrl : function (provinceId) {
        return 'http://'+domain+'/xzweb.php?op=Pub_SelCityJson&provinceid=' + provinceId ;
    },
    getFangDong_CutUserHeadImageFrameUrl : function (headImageUrl) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_CutUserHeadImageFrame&headImageUrl='+headImageUrl;
    },
    /*07-03*/
    getFangDong_SetNoticeSetUrl : function (smsLodgeunitSucc,smsBookorderTimeout,smsPayTimeout,smsNewComment,emailLodgeunitSucc,emailBookorderTimeout,emailPayTimeout,emailNewComment) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_NoticeSetSub&sms_lodgeunitsucc='+smsLodgeunitSucc+'&sms_bookordertimeout='+smsBookorderTimeout+'&sms_paytimeout='+smsPayTimeout+'&sms_newcomment='+smsNewComment+'&email_lodgeunitsucc='+emailLodgeunitSucc+'&email_bookordertimeout='+emailBookorderTimeout+'&email_paytimeout='+emailPayTimeout+'&email_newcomment='+emailNewComment+'&random'+new Date().getTime();
    },
    getFangDong_OrderByStateUrl : function (orderState,pageNo,sortType) {
        sortType = ('undefined' !== typeof sortType) ? sortType : "";
        return 'http://'+domain+'/xzweb.php?op=FangDong_OrderByState&orderState='+orderState+'&sortType='+sortType+'&p='+pageNo+'&random='+new Date().getTime();
    },
    getFangDong_SetBankPaymentUrl : function (id, ownerId) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_SetBankPayment&id='+id+'&ownerid='+ownerId;
    },
    getFangDong_SetAlipayPaymentUrl : function (id, ownerId) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_SetAlipayPayment&id='+id+'&ownerid='+ownerId;
    },
    getFangDong_GetTenpayInfoUrl : function (id, ownerId) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_GetTenpayInfo&id='+id+'&ownerid='+ownerId;
    },
    getFront_Login_KernelUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=Front_Login_Kernel';
    },
    getFront_Register_KernelUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=Front_Register_Kernel';
    },
    getFront_DetailPageMapUrl : function (luid) {
        return 'http://'+domain+'/xzweb.php?op=Front_DetailPageMap&id='+luid;
    },
    getFront_Login_SubmitUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=Front_Login_Submit';
    },
    getFront_BookOrderPayFail : function (orderId) {
        return 'http://'+domain+'/xzweb.php?op=Front_BookOrderPayFail&bookorderid='+orderId;
    },

    getAjax_RegisterWithPhoneAndPass : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_RegisterWithPhoneAndPass';
    },
    getAjax_SendCommentShareUrl : function (commentid, source) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SendCommentShare&commentid='+commentid+'&source='+source+'&random='+new Date().getTime();
    },
    getAjax_CommentShareUrl : function (commentid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CommentShare&commentid='+commentid+'&random='+new Date().getTime();
    },
    getAjax_CommentFangKeShareUrl : function (commentid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CommentFangKeShare&commentid='+commentid+'&random='+new Date().getTime();
    },
    getAjax_FangKe_BookOrder_RefundShowUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_BookOrder_RefundShow&bookOrderId='+bookOrderId;
    },
    getAjax_SaveDefaultUserHeadImageUrl : function (imgId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SaveDefaultUserHeadImage&id='+imgId;
    },
    getAjax_SaveUserHeadImageUrl : function (imgurl, gcx, gcy, gcw, gch) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SaveUserHeadImage&imgurl='+encodeURIComponent(imgurl)+'&x='+gcx+'&y='+gcy+'&w='+gcw+'&h='+gch;
    },
    /*07-03*/
    getAjax_PostReplyUrl : function (replycontent,rcid,commentType) {
        return 'http://'+domain+'/ajax.php?op=Ajax_PostReply&content='+replycontent+'&rcid='+rcid+'&commentType='+commentType;
    },
    getAjax_PostReplyShareUrl : function (replyid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_PostReplyShare&replyId='+replyid+'&random='+new Date().getTime();
    },
    getAjax_DelReplyUrl : function (replyid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelReply&data='+replyid;
    },
    getAjax_DelCommentUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelComment';
    },
    getAjax_BookOrderCancelReasonUrl : function (bookorderId, rejectType, rejectText) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BookOrderCancelReason&bookorderid='+bookorderId+'&cancelType='+rejectType+'&cancelReason='+encodeURIComponent(rejectText);
    },
    getAjax_FangKe_CheckInCodeVerifyUrl : function (bookorderId,code) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_CheckInCodeVerify&orderid='+bookorderId+'&code='+code;
    },
    getAjax_DelUserPaymentUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelUserPayment&id='+id;
    },
    getAjax_BankCityJsonUrl : function (provinceId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BankCityJson&provinceid='+provinceId;
    },
    getAjax_BankJsonUrl : function (bankName,bankProviceId,bankCityId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BankJson&banktypeid='+bankName+'&bankprovinceid='+bankProviceId+'&bankcityid='+bankCityId;
    },
    getAjax_CheckTenpayInfoParam : function (tenpayno,tenpayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckTenpayInfo&tenpayno='+tenpayno+'&tenpayusername='+tenpayusername;
    },
    getAjax_GetDefaultLandMarkUrl : function (cityDomain) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetDefaultLandMark&domain='+cityDomain;
    },
    /*08-19*/
    getAjax_CheckLodgeUnitUrl : function (cityDomain) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckLodgeunit&luid='+cityDomain;
    },
    getAjax_CheckSearchConditionUrl : function (searchCity,cityDomain,startDate,endDate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckSearchCondition&searchCity='+searchCity+"&cityDomain="+cityDomain+"&startDate="+startDate+"&endDate="+endDate;
    },
    getAjax_BuildFilterSearchUrl : function (partner,startDate,endDate,citydomain,putkey,keywordType,keywordValue,checkedHouseType,checkedfacilities,checkedrentType,guestnum,price) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BuildFilterSearch&partner='+partner+'&startDate='+startDate+'&endDate='+endDate+'&citydomain='+citydomain+'&putkey='+putkey+'&keywordType='+keywordType+'&keywordValue='+keywordValue+'&housetyperoomcnt='+checkedHouseType+'&facilities='+checkedfacilities+'&leasetype='+checkedrentType+'&guestnum='+guestnum+'&price='+price; 
    },
    getAjax_GetDatas4Map : function (partner,startDate,endDate,city,putkey,district,landmark,checkedHouseType,checkedfacilities,checkedrentType,guestnum,lowprice,highprice,pageNo,sort) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetDatas4Map&partner='+partner+'&startDate='+startDate+'&endDate='+endDate+'&city='+city+'&putkey='+putkey+'&district='+district+'&landmark='+landmark+'&housetyperoomcnt='+checkedHouseType+'&facilities='+checkedfacilities+'&leasetype='+checkedrentType+'&guestnum='+guestnum+'&lowprice='+lowprice+'&highprice='+highprice+'&pageno='+pageNo+'&sort='+sort; 
    },
    getAjax_GetMapDatasLodgeUnit : function (partner,startDate,endDate,city,putkey,district,landmark,checkedHouseType,checkedfacilities,checkedrentType,guestnum,lowprice,highprice,pageNo,sort,radius,lat,lng) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetDatas4MapLodgeUnit&partner='+partner+'&startDate='+startDate+'&endDate='+endDate+'&city='+city+'&putkey='+putkey+'&district='+district+'&landmark='+landmark+'&housetyperoomcnt='+checkedHouseType+'&facilities='+checkedfacilities+'&leasetype='+checkedrentType+'&guestnum='+guestnum+'&lowprice='+lowprice+'&highprice='+highprice+'&pageno='+pageNo+'&sort='+sort+'&radius='+radius+'&lat='+lat+'&lng='+lng; 
    },
    getAjax_getDatasMapLodgeunit4Page : function (partner,startDate,endDate,city,putkey,district,landmark,checkedHouseType,checkedfacilities,checkedrentType,guestnum,lowprice,highprice,pageNo,sort,radius,lat,lng) {
        return 'http://'+domain+'/ajax.php?op=Ajax_getDatasMapLodgeunit4Page&partner='+partner+'&startDate='+startDate+'&endDate='+endDate+'&city='+city+'&putkey='+putkey+'&district='+district+'&landmark='+landmark+'&housetyperoomcnt='+checkedHouseType+'&facilities='+checkedfacilities+'&leasetype='+checkedrentType+'&guestnum='+guestnum+'&lowprice='+lowprice+'&highprice='+highprice+'&pageno='+pageNo+'&sort='+sort+'&radius='+radius+'&lat='+lat+'&lng='+lng; 
    },
    getAjax_doFullTextSearch4Map : function (offset,url) {
        return 'http://'+domain+'/ajax.php?op=Ajax_doFullTextSearch4Map&offset='+offset+'&url='+encodeURIComponent(url);
    },
    getAjax_GetBookLodgeUnitDetailUrl : function (lodgeId,sameRoomNum,startDate,endDate) {
        return "http://"+domain+"/ajax.php?op=Ajax_GetBookLodgeUnitDetail&lodgeId="+lodgeId+"&sameRoomNum="+sameRoomNum+"&startdate="+startDate+"&enddate="+endDate+"&rand="+new Date().getTime();
    },
    getAjax_GetOrderPriceDetailUrl : function (bookOrderId) {
        return "http://"+domain+"/ajax.php?op=Ajax_GetOrderPriceDetail&bookOrderId="+bookOrderId+"&rand="+new Date().getTime();
    },
    getAjax_GetLazyInfoUrl : function (memkey,memtimeout,turl) {
        return "http://"+domain+"/ajax.php?op=Ajax_LoadInfo&memkey="+memkey+"&memtimeout="+memtimeout+"&turl="+turl;
    },
    getAjax_AddFeedbackUrl : function (problem,contact,imageParam) {
        return "http://"+domain+"/ajax.php?op=Ajax_Add_Feedback&problem="+problem+"&contact="+contact+"&imageParam="+imageParam;
    },
    getAjax_GetFeedbackUrl : function () {
        return "http://"+domain+"/ajax.php?op=Ajax_Get_Feedback";
    },




    getAjax_GetVerifyCode : function () {
        return "http://"+domain+"/ajax.php?op=AJAX_GetVerifyCode&nocache="+new Date().getTime();
    },
    getAjax_CheckMobileExist : function (mobile) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckMobileExist&mobile=' + mobile;
    },
    getAjax_CheckRegistExist : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckRegistExist';
    },
    getAjax_CheckUsernameExist : function (username) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckUsernameExist&username=' + encodeURIComponent(username);
    },
    getAjax_CheckOldUsernameExist : function (username) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckOldUsernameExist&username=' + username;
    },
    getAjax_CheckEmailExist : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckEmailExist';
    },
    getAjax_CheckVerifyCode : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckVerifyCode';
    },
    getAjax_SendActivateCode : function (mobile, verifyCode) {
        return 'http://'+domain+'/limajax/AJAX_SendActivateCode?mobile='+ mobile +'&verifycode='+ verifyCode + '&rand='+new Date().getTime();
    },
    getAjax_SendAmendPassCode : function (mobile, verifyCode) {
        return 'http://'+domain+'/limajax/AJAX_SendAmendPassCode?mobile='+ mobile +'&verifycode='+ verifyCode + '&rand='+new Date().getTime();
    },
    getAjax_CheckActiveCode : function (mobile,activateCode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckActivateCode&mobile='+mobile+'&activatecode='+activateCode +'&rand='+new Date().getTime();
    },
    getAjax_CheckInviteCode : function (inviteCode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckInviteCode&invitecode='+inviteCode;
    },
    getAjax_SendConfirmCode : function (mobile, verifyCode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_SendConfirmCode&mobile='+ mobile +'&verifycode='+ verifyCode + '&rand='+new Date().getTime();
    },
    getAjax_SendQuickLoginCode : function(mobile, verifyCode){
        return 'http://'+domain+'/ajax.php?op=AJAX_SendQuickLoginCode&mobile='+ mobile +'&verifycode='+ verifyCode + '&rand='+new Date().getTime();
    },
    getAjax_CheckConfirmCode : function (mobile,confirmCode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckConfirmCode&mobile='+mobile+'&confirmcode='+confirmCode +'&rand='+new Date().getTime();
    },
    getAjax_VerifyCodeFirstShow : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_VerifyCodeFirstShow&rand='+new Date().getTime();
    },
    getAjax_Login : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_Login';
    },
    getAjax_LoginMobile : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_LoginMobile';
    },
    getAjax_RegisterByMobile : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_RegisterByMobile';
    },
    getAjax_RegisterByEmail : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_RegisterByEmail';
    },
    getAjax_FindPasswordByEmail : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_ResetPasswordByEmail';
    },
    getAjax_ResetPasswordFromEmail : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_ResetPasswordFromEmail';
    },
    getAjax_SendRegValidateEmailUrl : function(email,next){
        return 'http://'+domain+'/ajax.php?op=AJAX_SendRegValidateEmail&email='+encodeURIComponent(email)+'&next='+encodeURIComponent(next)+'&random='+new Date().getTime();
    },
    getAjax_FindPasswordByMobile : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_ResetPasswordByMobile';
    },
    getAjax_AmendPasswordByMobile : function (){
        return 'http://'+domain+'/ajax.php?op=AJAX_AmendPasswordByMobile';
    },
    getAjax_AmendPasswordByEmail : function (){
        return 'http://'+domain+'/ajax.php?op=AJAX_AmendPasswordByEmail';
    },
    getAjax_BindOpenAccount : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_BindOpenAccount';
    },
    getAjax_OpenAccountRegister : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_OpenAccountRegister';
    },
    getAjax_ReSendActiveEmail : function (uid, uidtoken) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ReSendActiveEmail&uid=' + uid + '&uidtoken=' + uidtoken;
    },
    getAjax_ChangeActiveEmail : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_ChangeActiveEmail';
    },














    getAjax_CheckNickNameUrlNoParam: function () {
        return "http://"+domain+"/ajax.php?op=Ajax_CheckNickName";
    },

    getAjax_GetPicCheckCodeShowUrl : function () {
        return "http://"+domain+"/ajax.php?op=AJAX_PicCheckCodeShow&nocache="+new Date().getTime();
    },
    getAjax_GetSendMessageAppDownloadUrl: function (mobile,checkcode) {
        return "http://"+domain+"/ajax.php?op=Ajax_Send_Message_App_Download_Url&mobile="+mobile+"&checkcode="+checkcode+"&rand="+new Date().getTime();
    },
    getAjax_SendSms4AppDownloadUrl: function (mobile,checkcode,apptype) {
        return "http://"+domain+"/ajax.php?op=Ajax_SendSms4AppDownload&mobile="+mobile+"&checkcode="+checkcode+"&apptype="+apptype+"&rand="+new Date().getTime();
    },
    getAjax_CheckUserPasswordUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckUserPassword';
    },
    getAjax_CheckPhone : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckPhone';
    },
    getAjax_CheckEmailUrl: function (email) {
        return "http://"+domain+"/ajax.php?op=Ajax_CheckEmail&email="+email+"&random="+new Date().getTime();
    },
    getAjax_CheckEmailUrlNoParam: function () {
        return "http://"+domain+"/ajax.php?op=Ajax_CheckEmail";
    },
    getAjax_SendActiveEmailUrl: function (email) {
        return "http://"+domain+"/ajax.php?op=Ajax_Send_Active_Email&email="+email;
    },
    getAjax_ReadSysNoticeUrl: function (messageId) {
        return "http://"+domain+"/ajax.php?op=Ajax_ReadSysNotice&msgId="+messageId;
    },
    getAjax_DelSysNoticeUrl : function (messageId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelSysNotice&msgId='+messageId;
    },
    getAjax_SetChatReplyUrl : function (replys) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetChatReply&data='+encodeURIComponent(replys)+'&_t='+new Date().getTime();
    },
    getAjax_ResetChatReplyUrl : function (replys) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ResetChatReply&data='+encodeURIComponent(replys)+'&_t='+new Date().getTime();
    },
    getAjax_SmsCheckCodeSendUrl : function (phonenum,imagecode,aisle) {
        return 'http://'+domain+'/ajax.php?op=AJAX_SmsCheckCodeSend&phone='+phonenum+'&checkcode='+imagecode+'&aisle='+aisle;
    },
    getAjax_SetUserPhoneCodeUrl : function (phonenum,phonecode,type) {
        if('undefined' !== typeof type)
        {
            return 'http://'+domain+'/ajax.php?op=Ajax_SetUserPhoneCode&phone='+phonenum+'&phonecode='+phonecode+'&type='+type;
        }else
        {
            return 'http://'+domain+'/ajax.php?op=Ajax_SetUserPhoneCode&phone='+phonenum+'&phonecode='+phonecode;
        }
    },
    getAjax_SmsCheckCodeVerifyUrl : function (phonenum,phonecode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_SmsCheckCodeVerify&phone='+phonenum+'&phonecode='+phonecode;
    },
    getAjax_Front_SendPhoneCode : function (phonenum,imagecode,aisle) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SendPhoneCode&phone='+phonenum+'&checkcode='+imagecode+'&aisle='+aisle+'&rand='+new Date().getTime();
    },
    getAjax_Front_SendPhoneCodeByPhone : function (phonenum,imagecode,aisle) {
        return 'http://'+domain+'/ajax.php?op=AJAX_SendPhoneCodeByPhone&phone='+phonenum+'&checkcode='+imagecode+'&aisle='+aisle+'&rand='+new Date().getTime();
    },
    getAjax_PhoneIsNotExist_PhoneIsLoginUserUrl : function (phonenum) {
        return 'http://'+domain+'/ajax.php?op=AJAX_PhoneIsNotExist_PhoneIsLoginUser&phone='+phonenum;
    },
    getAjax_UnbindSnsOpenIdUrl : function (shareType) {
        return 'http://'+domain+'/ajax.php?op=AJAX_UnbindSnsOpenId&shareType='+shareType;
    },
    getAjax_FangKeOrderList_OrderByTimeUrl : function (ordertype, createtype, p) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKeOrderList_OrderByTime&orderType='+ordertype+'&bookOrderCreateType='+createtype+'&p='+p+'&random='+new Date().getTime();
    },
    getAjax_FangKe_BookOrder_RefundDetailUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_BookOrder_RefundDetail&bookOrderId='+bookOrderId;
    },
    getAjax_FangKe_InsurancePlanUrl : function (bookOrderTenantId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_InsurancePlan&bookOrderTenantId='+bookOrderTenantId;
    },
    getAjax_FangKe_RejectCashPledgeUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_RejectCashPledge&bookOrderId='+bookOrderId;
    },
    getAjax_FangKe_ConfirmCashPledgeUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_ConfirmCashPledge&bookOrderId='+bookOrderId;
    },
    getAjax_FangKe_ServiceCashPledgeUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_ServiceCashPledge&bookOrderId='+bookOrderId;
    },

    getAjax_GetMoreTalkUrl : function (talkid,rows,requestTime) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetMoreTalk&talkid='+talkid+'&rows='+rows+'&_t='+requestTime;
    },
    getAjax_GetSettleAccountDetailUrl : function (orderId,pageNo) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetSettleAccountDetail&orderId='+orderId+'&p='+pageNo;
    },
    getAjax_FangDong_LuPromotionConditionUrl : function (luid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_LuPromotionCondition&luid='+luid+'&random='+new Date().getTime();
    },
    getAjax_FangDong_CancelPromotionUrl : function (luid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_CancelPromotion&luid='+luid+'&random='+new Date().getTime();
    },
    getAjax_FangDong_SelfPromotionUrl : function (luid,avgprice,selfpromotiondiscount,enddate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_SelfPromotion&luid='+luid+'&avgPrice='+avgprice+'&discount='+selfpromotiondiscount+'&endDay='+enddate+'&random='+new Date().getTime();
    },
    getAjax_ConvertRedPackageUrl : function (userid,convertvalue) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ConvertRedPackage&userid='+userid+'&convertvalue='+convertvalue+'&_t='+new Date().getTime();
    },
    getAjax_FangDong_TenantAuthentication2GuoZhengTongUrl : function (tenantid,realname,cardno) {
        return "http://"+domain+"/ajax.php?op=Ajax_FangDong_TenantAuthentication2GuoZhengTong&tenantid="+tenantid+"&realname="+realname+"&cardno="+cardno;
    },
    getAjax_ShowNewLetterUrl : function (content) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ShowNewLetter&content='+encodeURIComponent(content);
    },
    getAjax_DelTalkUrl : function (talkid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelTalk&delid='+talkid;
    },
    getAjax_SetTenpayInfoUrl : function (tenpayno,tenpayusername,balanceForm) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetTenpayInfo&tenpayno='+tenpayno+'&tenpayusername='+tenpayusername+'&balanceform='+balanceForm;
    },
    getAjax_CheckAlipayInfoUrl : function (alipayno,alipayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckAlipayInfo&alipayno='+alipayno+'&alipayusername='+alipayusername;
    },
    getAjax_SaveAlipayInfoUrl : function (alipayno,alipayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SaveAlipayInfo&alipayno='+alipayno+'&alipayusername='+alipayusername;
    },
    getAjax_SetAlipayInfoUrl : function (alipayno,alipayusername,balanceForm,id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetAlipayInfo&alipayno='+alipayno+'&alipayusername='+alipayusername+'&balanceform='+balanceForm+'&id='+id;
    },
    getAjax_SetDefaultUserPaymentUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetDefaultUserPayment&id='+id;
    },
    getAjax_SetNationalSecurityInfo : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetNationalSecurityInfo';
    },
    getAjax_FangDong_DelMyRoomsUrl : function (roomId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_MyRooms_Del&lodgeunitid='+roomId;
    },
    getAjax_FangDong_MyRoomsSwithStateUrl : function (roomId,switchstr) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_MyRooms_SwithState&lodgeunitid='+roomId+'&switchval='+switchstr+'&random='+new Date().getTime();
    },
    getAjax_FangDong_MyPartRoomsUrl : function (lodgeId,pageNo) {
        return 'http://'+domain+'/ajax.php?op=AJAX_FangDong_MyPartRooms&parentId='+lodgeId+'&p='+pageNo;
    },
    getAjax_SetLodgeUnitCalendarUrl : function (lodgeUnitId, startDate, endDate, subPrice, bookable, roomnum) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetLodgeUnitCalendar&lodgeunitid='+lodgeUnitId+'&startdate='+startDate+'&enddate='+endDate+'&price='+subPrice+'&bookable='+bookable+'&housenum='+roomnum+'&random='+new Date().getTime();
    },
    getAjax_GetLodgeUnitPromotionUrl : function (lodgeUnitId, startdate, enddate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLodgeUnitPromotion&lodgeunitid='+lodgeUnitId+'&startdate='+startdate+'&enddate='+enddate;
    },
    getAjax_GetLodgeUnitCalendarUrl : function (lodgeUnitId, startdate, enddate, vstartdate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLodgeUnitCalendar&lodgeunitid='+lodgeUnitId+'&startdate='+startdate+'&enddate='+enddate+'&editable=true&_vstartdate='+vstartdate+'&_t='+new Date().getTime();
    },
    getAjax_GetLodgeUnitCalendar : function (lodgeUnitId, startdate, enddate,calendarCode) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLodgeUnitCalendar&lodgeunitid='+lodgeUnitId+'&startdate='+startdate+'&enddate='+enddate+'&calendarCode='+calendarCode+'&_t='+new Date().getTime();
    },
    getAjax_CheckCalendarVerifyCodeUrl : function(luId,verifyCode){
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckCalendarVerifyCode&luid='+luId+'&calendarCode='+verifyCode;
    },
    getAjax_SetLodgeUnitDayPriceUrl : function (lodgeUnitId, price) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetLodgeUnitDayPrice&lodgeunitid='+lodgeUnitId+'&price='+price+"&_t="+new Date().getTime();
    },
    getAjax_SetLodgeUnitWeekPriceUrl : function (lodgeUnitId, monValue,tueValue,wedValue,thuValue,friValue,satValue,sunValue,startDate,endDate) {
        return "http://"+domain+"/ajax.php?op=Ajax_SetLodgeUnitWeekPrice&lodgeunitid="+lodgeUnitId+"&mon="+monValue+"&tue="+tueValue+"&wed="+wedValue+"&thu="+thuValue+"&fri="+friValue+"&sat="+satValue+"&sun="+sunValue+"&startdate="+startDate+"&enddate="+endDate+"&_t="+new Date().getTime();
    },
    getAjax_FangDong_WeekMonthPromotionUrl : function (lodgeUnitId, discountPerWeek,discountPerMonth) {
        return "http://"+domain+"/ajax.php?op=Ajax_FangDong_WeekMonthPromotion&lodgeunitid="+lodgeUnitId+"&discountperweek="+discountPerWeek+"&discountpermonth="+discountPerMonth+"&_t="+new Date().getTime();
    },
    getAjax_SetLodgeUnitDateIntervalPriceUrl : function (lodgeUnitId, price) {
        return "http://"+domain+"/ajax.php?op=Ajax_SetLodgeUnitDateIntervalPrice&lodgeunitid="+lodgeUnitId+"&price="+price+"&_t="+new Date().getTime();
    },
    getAjax_GetLodgeUnitPromotionUrl: function (lodgeUnitId, startdate, enddate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLodgeUnitPromotion&lodgeunitid='+lodgeUnitId+'&startdate='+startdate + '&enddate='+enddate;
    },
    getAjax_FangDong_EditOrderPriceUrl: function () {
        return "http://"+domain+"/ajax.php?op=Ajax_FangDong_EditOrderPrice";
    },
    getAjax_Pub_GetStepPreviewUrl: function (step,houseId,roomId) {
        return "http://"+domain+"/ajax.php?op=Ajax_Pub_GetStep"+step+"_Preview&houseId="+houseId+"&roomId="+roomId+"&_t="+new Date().getTime();
    },
    getAjax_Pub_GetStepEditUrl: function (step,houseId,roomId) {
        return "http://"+domain+"/ajax.php?op=Ajax_Pub_GetStep"+step+"&houseId="+houseId+"&roomId="+roomId+"&_t="+new Date().getTime();
    },
    getAjax_FangKe_BookOrder_RefundSubmitUrl : function (bookOrderId, cancelBookOrderType, cancelBookOrderReason) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_BookOrder_RefundSubmit&bookOrderId='+bookOrderId+'&cancelBookOrderType='+cancelBookOrderType+'&cancelBookOrderReason=' + encodeURIComponent(cancelBookOrderReason);
    },
    getAjax_Pub_GetCityJson : function (province_id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_getCityJson&provinceid='+province_id+'&_t=' + new Date().getTime();
    },
    getAjax_Pub_GetDistrictJson : function (city_id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_getDistrictJson&cityid='+city_id+'&_t=' + new Date().getTime();
    },
    getAjax_Pub_GetStreetJson : function (district_id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_getLocaltion&districtid='+district_id+'&_t=' + new Date().getTime();
    },
    getAjax_Pub_CheckAlipayInfo : function (alipayno,alipayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckAlipayInfo&alipayno='+alipayno+'&alipayusername='+encodeURIComponent(alipayusername);
    },
    getAjax_Pub_SaveAlipayInfo : function (alipayno,alipayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SaveAlipayInfo&alipayno='+alipayno+'&alipayusername='+encodeURIComponent(alipayusername);
    }, 
    getAjax_Pub_SetAlipayInfo : function (alipayno,alipayusername,balanceForm) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetAlipayInfo';
        //return 'http://'+domain+'/ajax.php?op=Ajax_SetAlipayInfo&alipayno='+alipayno+'&alipayusername='+alipayusername+'&alipaybalanceform='+balanceForm;
    },
    getAjax_Pub_PreBankPayMent_Submit : function (bankname,bankprovice,bankcity,bankaccountid,bankbranchname,pubpri,bankbranchtex,bankaccountname) {
        return 'http://'+domain+'/ajax.php?op=Ajax_PUB_PreBanckPayMent_Submit&bankname='+bankname+'&bankprovice='+bankprovice+'&bankcity='+bankcity+'&bankaccountid='+bankaccountid+'&bankbranchname='+bankbranchname+'&pubpri='+pubpri+'&bankbranchtext='+bankbranchtex+'&bankaccountname='+bankaccountname;
    },
    getAjax_Pub_Set_SelfPromotion : function (luid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Set_SelfPromotion&luid='+luid;
    },
    getAjax_Pub_CutImage : function (url,width,height) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CutImage&key='+url+'&_w='+width+'&_h='+height;
    },
    getAjax_Pub_UploadCutAfterIamge : function (key,value) {
        return 'http://'+domain+'/ajax.php?op=Ajax_uploadCutAfterImage&key='+key+'&value='+value;
    },
    getAjax_Pub_PreGetUserHeadImg : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_PUB_PreGetUserHeadImg';
    },
    getPub_Step1_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_HouseDetail_Submit';
    },
    getPub_Step1_RoomBase_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomBase_Submit';
    },
    getPub_Step2_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomDetail_Submit';
    },
    getPub_Step3_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomFacilities_Submit';
    },
    getPub_Step4_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomPicture_Submit';
    },
    getPub_Step5_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomPrice_SubmitSave';
    },
    getAjax_RoomProcessPass : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomProcessPass&roomId='+roomId;
    },
    getPub_HouseDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_GetStep1map&roomId='+roomId;
    },
    getPub_PreviewHouseDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_GetStep1map_Preview&roomId='+roomId;
    },
    getPub_PreviewHouseRoomDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewHouseRoomDetail&roomId='+roomId;
    },
    getPub_Preview_HouseRoomDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_HouseRoomDetail&roomId='+roomId;
    },
    getPub_PreviewDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewDetail&roomId='+roomId;
    },
    getPub_Preview_RoomDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomDetail&roomId='+roomId;
    },
    getPub_PreviewFacilities : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewFacilities&roomId='+roomId;
    },
    getPub_Preview_RoomFacilities : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomFacilities&roomId='+roomId;
    },
    getPub_PreviewPicture : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewPicture&roomId='+roomId;
    },
    getPub_Preview_RoomPicture : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomPicture&roomId='+roomId;
    },
    getPub_PreviewPrice : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewPrice&roomId='+roomId+'&room_type=2';
    },
    getPub_Preview_Price : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomPrice&roomId='+roomId;
    },
    getPub_PreviewPriceQequest : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewPriceQequest&roomId='+roomId+'&room_type=3';
    },
    getPub_Preview_PriceQequest : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomPriceQequest&roomId='+roomId;
    },
    getPub_Preview_Success : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_Success';
    },
    getPub_LodgeUnitSite : function(houseId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_GetLodgeUnitSite&houseId='+houseId+'&rand='+Math.random();
    },
    getPub_LodgeUnitSite_Save : function(houseId,provinceId,cityId,districtId,inputAddress,latlng,doorNumber){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_GetLodgeUnitSite_Save&houseId='+houseId+'&provinceId='+provinceId+'&cityId='+cityId+'&districtId='+districtId+'&inputAddress='+inputAddress+'&latlng='+latlng+'&doorNumber='+doorNumber+'&rand='+Math.random();
    },
    getPub_EditAddress : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_EditAddress';
    },
    getFront_Map_GetMapData : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetMapData';
    },
    getFront_Map_GetSubway4Map : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetSubway4Map';
    },
    getFront_Map_CheckSearchCondition : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckSearchCondition';
    },
    getAjax_Map_GetLandMarkSuggestion : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_getLandMarkSuggestion';
    },
    getAjax_FangDong_SetAutoCheck : function (isAutoCheck) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetAutoCheck&isAutoCheck=' + isAutoCheck;
    },
    getAjax_Front_GetCancelRule : function (luid,roomNum,startDate,endDate) {
        return 'http://'+domain+'/ajax.php?op=AJAX_GetCancelRule&luid='+luid+'&roomNum='+roomNum+'&startdate='+startDate+'&enddate='+endDate+'&rand='+new Date().getTime();
    },
    getAjax_Front_GetBookAbleRoomNum : function (lodgeId,startDate,endDate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetBookAbleRoomNum&lodgeunitid='+lodgeId+'&startdate='+startDate+'&enddate='+endDate;
    },
    getAjax_Front_GetRoomBookAble : function (lodgeId,sameRoomNum,startDate,endDate,bookOrderId,version) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetRoomBookAble&lodgeId='+lodgeId+'&sameRoomNum='+sameRoomNum+'&startdate='+startDate+'&enddate='+endDate+'&bookorderid='+bookOrderId+'&version='+version+'&rand='+new Date().getTime();
    },
    getAjax_Front_GetTotalPrice4BookOrder : function (lodgeId,sameRoomNum,startDate,endDate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetTotalPrice4BookOrder&lodgeId='+lodgeId+'&sameRoomNum='+sameRoomNum+'&startdate='+startDate+'&enddate='+endDate+'&rand='+Math.floor(Math.random()*10000);
    },
    getAjax_Front_PicCheckCodeVerify : function (checkcode,phone) {
        return 'http://'+domain+'/ajax.php?op=AJAX_PicCheckCodeVerify&checkcode='+checkcode+'&phone='+phone;
    },
    getAjax_Front_UpdateLoginUser : function (name,sex) {
        return 'http://'+domain+'/ajax.php?op=AJAX_UpdateLoginUser&realName='+encodeURIComponent(name)+'&sex='+sex+'&random='+new Date().getTime();
    },
    getAjax_Front_PhoneIsLoginUser : function (mobile,name,sex) {
        return 'http://'+domain+'/ajax.php?op=AJAX_PhoneIsLoginUser&mobile='+mobile+'&realName='+encodeURIComponent(name)+'&sex='+sex+'&random='+new Date().getTime();
    },
    getAjax_Front_CollegeStudentShare : function (status,image,state,objId,objType,friendName,phone,phonecode,email) {
        return 'http://'+domain+'/ajax.php?op=SendCollegeStudentShare&status='+status+'&image='+image+'&state='+state+'&objId='+objId+'&objType='+objType+'&friendName='+friendName+"&phone="+phone+"&phonecode="+phonecode+"&email="+email;
    },
    getAjax_Front_PhoneIsNotExist_PhoneIsLoginUser : function (value) {
        return 'http://'+domain+'/ajax.php?op=AJAX_PhoneIsNotExist_PhoneIsLoginUser&phone='+value+'&rand='+new Date().getTime();
    },
    getAjax_Front_GaoXiao_RoomComment : function (luid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetComment4GaoXiao&luid='+luid;
    },
    getWeb_FangDong_CommentUrl : function (filter) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_Comment&filter='+filter;
    },
    getAjax_Front_UserTenantList : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_UserTenant&rand='+new Date().getTime();
    },
    getWeb_FangKe_CommentUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangKe_Comment';
    },
    getAjax_UserReal_RenZheng : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_UserReal_RenZheng';
    },
    getAjax_FD_DelDiaryUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_DelDiary&id='+id;
    },
    getAJAX_FD_RealNameVerifyImgSubUrl : function (data,flag) {
        return 'http://'+domain+'/ajax.php?op=AJAX_FD_RealNameVerifyImgSub&data=' + data +"&flag=" + flag;
    },
    getFangDong_CutSpecialHeadImageFrameUrl : function (imageUrl,markdw,markdh) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_CutSpecialHeadImageFrame&imageUrl=' + imageUrl + '&markdw=' + markdw + '&markdh=' + markdh;
    },
    getAjax_FD_SaveSpecialHeadImage : function (cutx,cuty,cutw,cuth,oriw,orih,oriurl,cutbkgw,cutbkgh,imgIntro) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_SaveSpecialHeadImage&cutx=' + cutx +"&cuty=" + cuty + "&cutw=" + cutw + "&cuth=" + cuth + "&oriw=" + oriw + "&orih=" + orih + "&oriurl=" + oriurl + "&cutbkgw=" + cutbkgw + "&cutbkgh=" + cutbkgh + "&imgIntro=" + encodeURIComponent(imgIntro);
    },
    getAjax_FD_DiaryCountUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_DiaryCount';
    },
    getAjax_FD_Special_OfflineUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_Special_Offline&id=' + id;
    },
    getAjax_FD_Special_OnlineUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_Special_Online&id=' + id;
    },
    getAjax_FD_RealNameVerifySubUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_RealNameVerifySub';
    },
    getAjax_FD_Diary_ToTopUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_Diary_ToTop&id=' + id;
    },
    getAjax_FD_Diary_ToTop_CountUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_Diary_ToTop_Count';
    },
    getFDDiaryUploadImgUrl : function () {
        return 'http://'+domain+'/imgin4ImageText.php';
    },
    getAjax_GetTenantTagsUrl: function (tenantId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetTenantTags&tenantid=' + tenantId;
    },
    getAjax_UpdateSelfIntroUrl: function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_UpdateSelfIntro';
    },
    getAjax_UpdateCheckInInfoDisplayTypeUrl: function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_UpdateCheckInInfoDisplayType';
    },
    getAjax_GetTenantSpecialHeadImgsUrl: function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetTenantSpecialHeadImgUrl';
    },
    getAjax_SetTenantSpecialHeadImgUrl: function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetTenantSpecialHeadImgUrl';
    },
    getAjax_SearchLodgeUnit : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SearchLodgeUnit';
    },
    getWeb_NeedPub: function (cityDomain, startDate, endDate) {
        return 'http://'+domain+'/xzweb.php?op=Front_Need_Pub&startDate='+startDate+'&endDate='+endDate+'&searchcity='+cityDomain;
    },
    getWeb_NeedPubSubmit : function () {
        return 'http://'+domain+'/xzweb.php?op=Front_Need_Pub_Submit';
    },
    getAjax_SetTenantNeedResponseStatus : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetTenantNeedResponseStatus';
    },
    getAjax_SetTenantNeedTimeOutStatus : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetTenantNeedTimeOutStatus';
    },
    getAjax_NeedLodgeunit : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_getNeedLodgeunit';
    },
    getAjax_NeedLandlord : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_getNeedLandlord';
    },
    getAjax_ValidNeedCount : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_ValidNeedCount';
    },
    getFront_Login : function (next) {
        return 'http://'+topLevelDomain+'/login?next='+next;
    },
    getAjax_MakeAgeInfo : function (year,month,day) {
        return 'http://'+domain+'/ajax.php?op=Ajax_MakeAgeInfo&year='+year+'&month='+month+'&day='+day;
    },
    getAjax_CookieNoSubmitUsernameAndEmail : function (username,email) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CookieNoSubmitUsernameAndEmail&username='+username+'&email='+email;
    },
    getAjax_IncreaseGuideVisits : function (guideType) {
        return 'http://'+domain+'/ajax.php?op=Ajax_IncreaseGuideVisits&type='+guideType+'&random='+ new Date().getTime();
    },
    getAjax_FK_OperatorTenantNeedOrderUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_OperatorTenantNeedOrder';
    },
    getAjax_FD_OperatorTenantNeedOrderUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_OperatorTenantNeedOrder';
    },
    getAjax_GetTenantNeedOrderPriceDetailUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetTenantNeedOrderPriceDetail&tenantNeedOrderId=' + id + "&rand="+new Date().getTime();
    },
    getAJAX_TenantNeedOrderPaySynLockCheckUrl : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_TenantNeedOrderPaySynLockCheck';
    },
    getAjax_FD_EditTenantNeedOrderPriceUrl: function () {
        return "http://"+domain+"/ajax.php?op=Ajax_FD_EditTenantNeedOrderPrice";
    },
    getAjax_InviteFriendByEmailUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_InviteFriendByEmail';
    },
    getAjax_GetReferrerLandlordsUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetReferrerLandlords';
    },
    getAjax_doSettleUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_doSettle';
    },
    getAjax_SetBankPaymentSubUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetBankPaymentSub';
    },
    getAjax_setAlipaymentSubUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_setAlipaymentSub';
    },
    getAjax_TenantDoSettleUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_TenantDoSettle';
    },
    getAjax_LandlordDirectsellSettleRecordDataUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLandlordDirectsellSettleRecordData';
    },
    getAjax_ShareAfter : function (objId,objType,shareContentType,channel) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ShareAfter&objid='+objId+'&objtype='+objType+'&sharecontenttype='+shareContentType+'&channel='+channel;
    },
    getAjax_Exam : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_do_FangDong_Examination';
    },
    getAjax_Add_Cui : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_Special_Add_Urge';
    },
    getAjax_FangkeInBlackList : function (mobile,cardNo) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangkeInBlackList&mobile='+mobile+'&cardNo='+cardNo;
    },
    getAjax_BookOrder_EditUserInfo : function (password,nickname) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BookOrder_EditUserInfo&password='+password+'&nickname='+nickname;
    },
    getAjax_jsErrorLogger : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_JsErrorLogger';
    },
    getAjax_BookOrder_CheckState : function (lodgeId,sameRoomNum,startDate,endDate,bookOrderId,version) {
        return "http://"+domain+"/ajax.php?op=Ajax_BookOrder_CheckState&luid="+lodgeId+"&roomnum="+sameRoomNum+"&startdate="+startDate+"&enddate="+endDate+'&bookOrderId='+bookOrderId+'&version='+version+"&rand="+new Date().getTime();
    },
    getAjax_1yuanAutumnStatus : function () {
        return "http://"+domain+"/ajax.php?op=autumnDeep1yuanInStatus&time="+new Date().getTime();
    },
    getAjax_Add_Zan : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_Add_Zan';
    },
    getAjax_sendCoupon4AprilFoolDay : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_sendCoupon4AprilFoolDay';
    },
    getAjax_BookPayIntegralCoupon : function (bookorderid){
       return 'http://'+domain+'/ajax.php?op=Ajax_BookPayIntegralCoupon&bookorderid='+bookorderid;  
    },
    getAjax_CouponInfo: function (couponid){
       return 'http://'+domain+'/ajax.php?op=Ajax_GetCouponInfo&couponid='+couponid;    
    },
    getAjax_BookPayAbleCoupon: function (bookorderid){
       return 'http://'+domain+'/ajax.php?op=Ajax_BookPayAbleCoupon&bookorderid='+bookorderid;    
    },
    getWeb_FangKe_CheckCommentUrl: function (bookorderid){
       return 'http://'+domain+'/ajax.php?op=Ajax_CommitCheck&bookorderid='+bookorderid;    
    },
    getAddBillSubUrl : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_AddBillSub';
    },
    getUserBillHistoryUrl : function(pageNum){
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_BillHis&p='+pageNum+'&rand='+Math.random();
    },
    getCancelBillUrl : function(id){
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_BillCancel&id='+id;
    },
    getAddBillUrl : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_AddBill&rand='+Math.random();
    },
    getAjax_drawLottery4NoonBreakUrl : function (district,address){
        return 'http://'+domain+'/ajax.php?op=Ajax_DrawLottery4NoonBreak&district='+district+'&address='+address+'&rand='+Math.random();
    },
    getAjax_getNoonBreakAwardUrl : function (name,mobile,sleepTime){
        if(name && mobile && sleepTime){
            return 'http://'+domain+'/ajax.php?op=Ajax_getNoonBreakAward&name='+encodeURI(name)+'&mobile='+mobile+'&sleepTime='+sleepTime+'&rand='+Math.random();
        } else {
            return 'http://'+domain+'/ajax.php?op=Ajax_getNoonBreakAward&rand='+Math.random();
        }
    },
    getAjax_getAvaliableCarBedUrl : function (){
        return 'http://'+domain+'/ajax.php?op=Ajax_getAvaliableCarBed&rand='+Math.random();
    },
    getAjax_LuckerList4NoonBreakUrl : function (){
        return 'http://'+domain+'/ajax.php?op=Ajax_LuckerList4NoonBreak&rand='+Math.random();
    },
    getAjaxAddFavorite: function (loginUserid,lodgeUnitId){
       return 'http://'+domain+'/ajax.php?op=Ajax_AddFavorite&loginUserid='+loginUserid+'&lodgeUnitId='+lodgeUnitId+'&rand='+new Date().getTime();    
    },
    getAjaxCancelFavorite: function (lodgeUnitId){
       return 'http://'+domain+'/ajax.php?op=Ajax_CancelFavorite&lodgeUnitId='+lodgeUnitId+'&rand='+new Date().getTime();    
    },
    getAjaxGetZhiMaNoCashPledgeList: function (cityId){
       return 'http://'+domain+'/ajax.php?op=Ajax_getZhiMaNoCashPledgeList&cityId='+cityId+'&rand='+new Date().getTime();    
    },
    getAjaxApplyCashPledgeByLandlordUrl : function(bookOrderId,pledge2Landlord,reason){
       return 'http://'+domain+'/ajax.php?op=Ajax_FD_ApplyCashPledge&bookOrderId='+bookOrderId+'&pledge2Landlord='+pledge2Landlord+'&reason='+encodeURIComponent(reason)+'&rand='+new Date().getTime();
    },
    getAjaxCancelCashPledgeByLandlordUrl : function(bookOrderId){
       return 'http://'+domain+'/ajax.php?op=Ajax_FD_CancelCashPledge&bookOrderId='+bookOrderId+'&rand='+new Date().getTime();
    },
    getAjaxApplyServiceByLandlordUrl : function(bookOrderId){
       return 'http://'+domain+'/ajax.php?op=Ajax_FD_ApplyService4CashPledge&bookOrderId='+bookOrderId+'&rand='+new Date().getTime();
    },
    getReturnCashPledgeUrl : function(bookOrderId){
       return 'http://'+domain+'/ajax.php?op=Ajax_FD_ReturnCashPledge&bookOrderId='+bookOrderId+'&rand='+new Date().getTime();
    },
    getAJAX_GetLodgeUnitCalendar : function (luid,startDate,endDate,editable,calendarCode){
        return 'http://'+domain+'/ajax.php?op=AJAX_GetLodgeUnitCalendar&lodgeunitid='+luid+'&startdate='+startDate+'&enddate='+endDate+'&editable='+editable+'&calendarCode='+calendarCode+'&rand='+Math.random();
    },
    getAJAX_ActivitySanyaXiamen : function (){
        return 'http://'+domain+'/yunying.php?op=YunYing_luckyDraw&rand='+Math.random();
    },
    getAJAX_ActivitySanyaXiamenShare : function (){
        return 'http://'+domain+'/yunying.php?op=YunYing_shareLuckyDraw&rand='+Math.random();
    },
    getAJAX_applyCleanService : function (){
        return 'http://'+domain+'/ajax.php?op=Ajax_applyCleanService';
    },
    getAJAX_getMsCoupon : function (){
        return 'http://'+domain+'/ajax.php?op=Ajax_getMsCoupon';
    }

    
};
 
 var xzRegularExpression={a:1,isNum:/^\d{1,}$/,isMobile:/^\d{11}$/,isUsername:/^[\w|\u4E00-\u9FA5]*$/,simpleMobile:/^\d{11}$/,mobile:/^1((3[0-9])|(4[57])|(5[0-35-9])|(7[36780])|(8[0-9]))\d{8}$/,password:/^[0-9a-zA-Z*!@.\-? : ;|$#%^&()_+=\[\]\\\/{}<>",~`']{0,}$/,numbers:/[1-9][0-9]{4}/,simpleEmail:/^.*?@.+$/,email:/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)+[a-zA-Z]+$/,passport:/^[\d\w]{4,20}$/}; 
 /*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
 
 
function checkuser(e){
    if (e.indexOf("@",0)==-1){
        return  checkmobile(e);
    }
    else{
        return checkemail(e);
    }
}
function checkUsernameMobilEmail(e)
{
    if(xzRegularExpression.isMobile.test(e)){
        return  checkmobile(e);
    }
    else if (e.indexOf("@") >=0){
        return checkemail(e);
    }
    else {
        return checkOldUserName(e);
    }
}
function checkmobile(mobile){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (mobile == ""){
        returnContent.msg = "请输入手机号";
        returnContent.rst = false;
        return returnContent;
    }
    if(!xzRegularExpression.mobile.test(mobile))
    {
        returnContent.msg = "手机号码格式错误";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkverifyCode(verifyCode){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (verifyCode == "") {
        returnContent.msg = "请输入图片验证码";
        returnContent.rst = false;
        return returnContent;
    }
    if(verifyCode.length != 4)
    {
        returnContent.msg = "图片验证码错误";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkactivateCode(activateCode){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true; 
    if (activateCode == "") {
        returnContent.msg = "请输入手机验证码";
        returnContent.rst = false;
        return returnContent;
    }
    if(activateCode.length != 4){
        returnContent.msg = "手机验证码错误";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}

function CharMode(iN){
    if (iN >= 48 && iN <= 57) 
        return 1;
    if (iN >= 65 && iN <= 90) 
        return 2;
    if (iN >= 97 && iN <= 122) 
        return 4;
    else
        return 8;  
}

function bitTotal(num){
    modes = 0;
    for (i = 0; i < 5; i++){
        if (num & 1) modes++;
        num >>>= 1;
    }
    return modes;
}

function checkStrong(sPW){
    if (sPW.length <= 5)
        return 0;
    Modes = 0;
    for (i = 1; i < sPW.length; i++) {
        Modes |= CharMode(sPW.charCodeAt(i));
    }
    return bitTotal(Modes);
}

function subCheckPassword(pwd){
    var repeat = true;
    var series = true;
    var series2 = true;
    var len = pwd.length;
    var first = pwd.charAt(0);
    for(var i=1;i<len;i++){
        repeat = repeat && pwd.charAt(i) == first;
        series = series && pwd.charCodeAt(i) == pwd.charCodeAt(i-1) + 1;
        series2 = series2 && pwd.charCodeAt(i) == pwd.charCodeAt(i-1) - 1;
    }
    return !(repeat || series || series2);
}
function checkpassword(password,passEmptyMsg){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.blurmsg = '';
    if(passEmptyMsg=="" || typeof(passEmptyMsg)=="undefined") 
        passEmptyMsg = '请输入密码';
    if(password.length > 8 && checkStrong(password)>1){
        returnContent.level = 3;
    }
    else if(password.length > 8 && checkStrong(password)==1){
        returnContent.level = 2;
    }
    else if(checkStrong(password)>2){
        returnContent.level = 3;
    }
    else
    {
        returnContent.level = checkStrong(password);
    }
    returnContent.rst = true;
    if (password == ""){
        returnContent.msg = passEmptyMsg;
        returnContent.rst = false;
        return returnContent;
    }
    if(!xzRegularExpression.password.test(password)){
        returnContent.msg = "包含非法字符，请重新输入";
        returnContent.rst = false;
        return returnContent;
    }
    if(password.length < 6 || password.length > 12) {
        returnContent.msg = "密码长度只能在6-12位之间";
        returnContent.rst = false;
        return returnContent;
    }
    if(subCheckPassword(password) == false){
       returnContent.msg = "您的密码过于简单";
       returnContent.rst = false;
     return returnContent;
     }
    return returnContent;
}

function checkpassword2(password){
    var returnContent = {};
    returnContent.msg = '';
    if(password.length > 8 && checkStrong(password) > 1){
        returnContent.level = 3;
    }
    else if(password.length > 8 && checkStrong(password) == 1){
         returnContent.level = 2;
    }
    else if(checkStrong(password) > 2){
        returnContent.level = 3;
    }
    else
    {
        returnContent.level = checkStrong(password);
    }
    returnContent.rst = true;
    if(subCheckPassword(password) == false && password.length > 5){
        returnContent.msg = "您的密码过于简单";
        returnContent.rst = false;
        return returnContent;
    }
    if(!xzRegularExpression.password.test(password)){
        returnContent.msg = "包含非法字符，请重新输入";                                                                                                                                                          
        returnContent.rst = false;                                                                                                                                                                                                     
        return returnContent;  
    }
    return returnContent;
}
function checkusername(username){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (username == "") {
        returnContent.msg = "请输入用户名";
        returnContent.rst = false;
        return returnContent;
    }
    var len=0;
    var usernamelen=username.split("");
    for(var i=0;i<username.length;i++)
    {
        if(usernamelen[i].charCodeAt(0)<299){len++ }
        else len+=2;
    }
    if (len < 4){
        returnContent.msg = "用户名太短了";
        returnContent.rst = false;
        return returnContent;
    }
    if (len > 16){
        returnContent.msg = "用户名太长了";
        returnContent.rst = false;
        return returnContent;
    }
    if (!xzRegularExpression.isUsername.test(username)){
        returnContent.msg = "仅可用汉字、字母、数字或下划线";
        returnContent.rst = false;
        return returnContent;
    }
    if ((xzRegularExpression.isMobile.test(username)||xzRegularExpression.simpleEmail.test(username)||xzRegularExpression.numbers.test(username)) && (username.length >4)){
        returnContent.msg = "请勿出现QQ、手机等个人联系方式";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkusername2(username){
    var returnContent = {};
        returnContent.msg = '';
        returnContent.rst = true;
    if ((xzRegularExpression.isMobile.test(username)||xzRegularExpression.simpleEmail.test(username)||xzRegularExpression.numbers.test(username)) && (username.length >4)){
        returnContent.msg = "请勿出现手机、QQ、邮箱等个人联系方式";
        returnContent.rst = false;
        return returnContent;
    }
    if (!xzRegularExpression.isUsername.test(username)){
        returnContent.msg = "仅可使用汉字、英文、数字、下划线";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkemail(email){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (email == ""){
        returnContent.msg = "请输入邮箱";
        returnContent.rst = false;
        return returnContent;
    }
    if(!xzRegularExpression.email.test(email)){
        returnContent.msg = "邮箱格式不正确";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkOldUserName(oldUserName)
{
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (!xzRegularExpression.isUsername.test(oldUserName)){
        returnContent.msg = "请输入手机号或邮箱";
        returnContent.rst = false;
    }
    return returnContent;
}
function checkPassport(passId)
{
    var rst = {};
    rst.msg = '';
    rst.rst = true;
    if (passId == '') {
        rst.msg = "请输入护照号码";
        rst.rst = false;
    } else if (!xzRegularExpression.passport.test(passId)){
        rst.msg = "护照号码格式不正确 ";
        rst.rst = false;
    }
    return rst;
}

function checkIdCardRule(cardNo)
{
    var len = cardNo.length;
    if(len != 15 && len !=18)
    {
        return false;
    }
    var reg;
    var cardNoSplit;
    var bGoodDay;   
    var birth;
    if(len == 15)
    {
        if(!(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/.test(cardNo)))
        {
            return false;
        }
        else 
        {
            reg = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);   
            cardNoSplit = cardNo.match(reg);
            birth = new Date('19' + cardNoSplit[2] + '/' + cardNoSplit[3] + '/' + cardNoSplit[4]);   
            bGoodDay = (birth.getYear() == Number(cardNoSplit[2])) && ((birth.getMonth() + 1) == Number(cardNoSplit[3])) && (birth.getDate() == Number(cardNoSplit[4]));   
        }
    }
    else if(len == 18)
    {
        if(!(/^(\d{6})(19|20)?(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X|x)?$/.test(cardNo)))
        {
            return false;
        }
        else 
        {
            reg = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/);
            cardNoSplit = cardNo.match(reg);
            birth = new Date(cardNoSplit[2] + "/" + cardNoSplit[3] + "/" + cardNoSplit[4]);   
            bGoodDay = (birth.getFullYear() == Number(cardNoSplit[2])) && ((birth.getMonth() + 1) == Number(cardNoSplit[3])) && (birth.getDate() == Number(cardNoSplit[4]));   

        }
    }
    if (!bGoodDay) 
    { 
        return false;
    }
    else 
    {
        var nowYear = new Date().getFullYear();
        var nowMonth = new Date().getMonth();
        var nowDate = new Date().getDate();

        if( compareBirthDate(birth.getFullYear()+'-'+birth.getMonth()+'-'+birth.getDate(), ((nowYear-102)+"-"+nowMonth+"-"+nowDate))<0 || compareBirthDate(birth.getFullYear()+'-'+birth.getMonth()+'-'+birth.getDate(), ((nowYear-2)+"-"+nowMonth+"-"+nowYear))>0)
        {
            return false;
        }
        else 
        {
            if(len == 15)
            {
                return true;
            }
            else{
            // check city
            var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
            if(aCity[parseInt(cardNo.substr(0,2))]==null) {
                return false;
            }
            var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子  
            var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码  
            var sum = 0, idx;  
            for(var i = 0; i < cardNo.length - 1; i++){  
                sum += parseInt(cardNo.substr(i, 1), 10) * arrExp[i];  
            }  
            idx = sum % 11;  
            // 检验第18为是否与校验码相等  
            return arrValid[idx] == cardNo.substr(17, 1).toUpperCase();  
            }
        }
    }
}
function compareBirthDate(date1,date2)
{ // For ID Card Verify
    var newDate1 = date1.split('-');
    var dateY1 = newDate1[0];
    var dateM1 = newDate1[1];
    var dateD1 = newDate1[2];

    var newDate2 = date2.split('-');
    var dateY2 = newDate2[0];
    var dateM2 = newDate2[1];
    var dateD2 = newDate2[2];

    if(dateY1<dateY2)
    {
        return -1;
    }
    else if(dateY1>dateY2)
    {
        return 1;
    }
    else if(dateY1 == dateY2)
    {
        if(dateM1<dateM2)
        {
            return -1;
        }
        else if(dateM1>dateM2)
        {
            return 1;
        }
        else if(dateM1 == dateM2)
        {
            if(dateD1<dateD2)
            {
                return -1;
            }
            else if(dateD1>dateD2)
            {
                return 1;
            }
            else if(dateD1 == dateD2)
            {
                return 0;
            }
        }
    }
}

 
 var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-33763849-1']);
_gaq.push(['_setDomainName', '.xiaozhu.com']);
_gaq.push(['_addIgnoredRef', 'xiaozhu.com']);
_gaq.push(['_addOrganic', 'sogou', 'query']);
_gaq.push(['_addOrganic', 'youdao', 'q']);
_gaq.push(['_addOrganic', 'soso', 'w']);
_gaq.push(['_addOrganic', 'baidu', 'wd']);
_gaq.push(['_addOrganic', 'baidu', 'word']);
_gaq.push(['_addOrganic', 'baidu', 'q1']);
_gaq.push(['_addOrganic', 'ucweb', 'keyword']);
_gaq.push(['_addOrganic', 'ucweb', 'word']);
_gaq.push(['_addOrganic', '114so', 'kw']);
_gaq.push(['_addOrganic', 'bing', 'q']);
_gaq.push(['_trackPageview']);

$(window).load(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

    //var sem = document.createElement('script');
    //sem.src = '//s.va.cn/va.js?id=2674';
    //var s = document.getElementsByTagName('script')[0];
    //s.parentNode.insertBefore(sem, s);


    var _adwq = _adwq || [];
    _adwq.push(['_setAccount', 'wf9jr']);
    _adwq.push(['_setDomainName', '.xiaozhu.com']);
    _adwq.push(['_trackPageview']);
    var adw = document.createElement('script'); adw.type = 'text/javascript'; adw.async = true;
    adw.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://s') + '.emarbox.com/js/adw.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(adw, s);
    if($('#reqactionname').length > 0 && $('#reqactionname').val() == 'Front_Register_SuccessPage'){
        var userid = $("#userid").val();
        _adwq.push(['_setAction', '819ca8', userid, '' ]);
    }
});
 
 
XZWebAjax = {
    get : function(url, ajaxData, async, callback) {
        if (!ajaxData) var ajaxData = {};
        var nexturl = $('input[name=next][type=hidden]').val();
        if (nexturl){ajaxData.next = nexturl;}
        var returnData;
        $.ajax({
            type     : "GET",
            url      : url,
            data     : ajaxData,
            dataType : 'json',
            async    : async ? true : false,
            success  : function(datas){returnData = datas;if(callback) callback(datas);},
            error : function (XMLHttpRequest, textStatus, errorThrown){
                LogErrors(url, ajaxData, textStatus, XMLHttpRequest.readyState, XMLHttpRequest.responseText);
            }
        });
        return returnData;
    },
    post : function(url, ajaxData, async, callback) {
        if (!ajaxData) var ajaxData = {};
        var nexturl = $('input[name=next][type=hidden]').val();
        if (nexturl){ajaxData.next = nexturl;}
        var returnData;
        $.ajax({
            type     : "POST",
            url      : url,
            data     : ajaxData,
            dataType : 'json',
            async    : async ? true : false,
            success  : function(datas){returnData = datas;if(callback) callback(datas);},
            error : function (XMLHttpRequest, textStatus, errorThrown){
                LogErrors(url, ajaxData, textStatus, XMLHttpRequest.readyState, XMLHttpRequest.responseText);
            }
        });
        return returnData;
    },
    encrypt : function(url, ajaxData, async, callback) {
    }
};

 
 
_storage = window.localStorage;
var _timestamp = function (){ return Date.parse(new Date()) / 1000 ; };
function getStorage(name) {
    if(_storage) {
        return JSON.parse(_storage.getItem(name));
    }
}
function setStorage(name, value) {
    if(_storage) {
        _storage.setItem(name, JSON.stringify(value));
    }
}

var LogErrors = function(url, ajaxData, type, readyState, responseText) {
    var record = getStorage('9RU72crHq1-Yx608hqNB0');
    if (record && record.indexOf(url) >= 0) return;
    if (!record) record = [];
    record.push(url);
    setStorage('9RU72crHq1-Yx608hqNB0',record);
    var storageKey = 'hfHG5s70T7-A1Q8tl7P6p';
    if(_storage) {
        if (getStorage(storageKey)) {
            var logger = getStorage(storageKey);
        } else {
            var logger = [];
        }
        var time = _timestamp();
        var loggerData = {
            url:url,
            type:type,
            params:JSON.stringify(ajaxData),
            state:readyState,
            response:responseText,
            t: time
        };
        logger.push(loggerData);
        setStorage(storageKey, logger);
    }
    return true;
}
var sendErrors = function () {
    
    var storageKey = 'hfHG5s70T7-A1Q8tl7P6p';
    var logger = getStorage(storageKey);
    if (!logger) return;
    var date = new Date();
    var logTimer = getStorage('oTnH56x70F-' + date.getDate());
    if (logTimer > 10) return;
    var counter = logger.length;
    if(_storage && counter > 0 && counter < 10) {
        var oneLog = logger.shift();
        $.post(XZWebUrlWriter.getAjax_jsErrorLogger(),oneLog, function(){
            setStorage(storageKey, logger);
            setStorage('oTnH56x70F-' + date.getDate(), 1 + logTimer);
        });
    } else if (_storage && counter > 20) {
        setStorage(storageKey, []);
    }
}

sendErrors();











 
 
/* ==================== 输入框input type=text,password： ==================== 
 *  var username_input = new inputBox('#username', '#username-tip');
 *      username_input.showError('用户名重复');
 *      username_input.showOk();
 *      username_input.hideTip();
 *      username_input.setPlaceholder('请输入用户名');
 */
var inputBox = function(e, i, options) {
    options = options || {};

    this.placeHolder    = options.placeHolder   || '';
    this.errorTipClass  = options.errorTipClass || 'tipwrong';
    this.errorHtml      = options.errorHtml     || '<span class="icon-wrong"></span>';
    this.okHtml         = options.okHtml        || '<span class="icon-ok"></span>';
    this.focusBoxClass  = options.focusBoxClass || 'blue-border';
    this.errorBoxClass  = options.errorBoxClass || 'red-border';
    this.blurFunction   = options.blurFunction  || null;

    // blur时默认触发的校验函数，格式：{rst:true,msg:'请输入'}
    this.blurCheck      = options.blurCheck || null;
    //keyup时默认触发的校验,格式同上
    this.keyUpCheck      = options.keyUpCheck || null;
    //空值失焦默认提示文字
    this.blurDefaultTip = options.blurDefaultTip || null; 
    

    this.status = false;
    this.isCheck = false;
    this.e = typeof(e) == 'object' ? e : $(e);
    this.i = $(i).length > 0 ? $(i) : this.e.parent().parent().find('.tip-info-box, .tip, ' + '.' + this.errorBoxClass);
    this.init();
    return(this);
}
inputBox.prototype.init = function() {
    var _this = this;
    this.i.hide();
    if (this.placeHolder) this.setPlaceholder(this.placeHolder);
    this.e.focus(function(){
        _this.isCheck = false;
        $(this).parent('div').removeClass(_this.errorBoxClass).addClass(_this.focusBoxClass);
    });
    this.e.blur(function(){
        $(this).parent().removeClass(_this.errorBoxClass).removeClass(_this.focusBoxClass);
        if ($(this).val() == '' && _this.blurDefaultTip) _this.showError(_this.blurDefaultTip);
        if (_this.blurCheck) _this.check(_this.blurCheck);
        if (_this.blurFunction) _this.blurFunction();
        _this.isCheck = true;
    });
    this.e.keyup(function(){
        if (_this.keyUpCheck) _this.check(_this.keyUpCheck);
    });
    return(this);
}
inputBox.prototype.setPlaceholder = function(data) {
    this.e.attr('placeholder', data);
}
inputBox.prototype.showError = function(data) {
    this.i.html( this.errorHtml + data);
    this.i.addClass(this.errorTipClass).show();
    this.e.parent().addClass(this.errorBoxClass).removeClass(this.focusBoxClass);
    this.status = false;
}
inputBox.prototype.showOk = function() {
    this.i.html( this.okHtml);
    this.i.removeClass(this.errorTipClass).hide();
    this.e.parent().removeClass(this.errorBoxClass);
    this.status = true;
}
inputBox.prototype.hideTip = function(status) {
    this.i.hide();
    this.status = true;
}
inputBox.prototype.check = function(func) {
    var rst = func();
    if (!rst.rst && rst.msg){
        this.showError(rst.msg);
    } else {
        //this.hideTip();
        this.showOk();
    }
}

/* ==================== 密码强度设定： ==================== 
 *  var passTest = new passwordLevel('#padd-level');
 *      passText.setLevel(1);
 *      passText.setLevel(2);
 */
var passwordLevel = function(e, options) {
    options = options || {};
    this.e = $(e);
    this.l1 = this.e.find('.passwd-level-1');
    this.l2 = this.e.find('.passwd-level-2');
    this.l3 = this.e.find('.passwd-level-3');
    this.init();
    return(this);
}
passwordLevel.prototype.init = function() {
    this.e.blur(function(){
        $(this).css('border','1px solid red');
    });
    return(this);
}
passwordLevel.prototype.setLevel = function (level) {

    for (var x = 1;x <=3; ++x) {
        this.e.find('.passwd-level-' + x)
            .removeClass('password_level_1')
            .removeClass('password_level_2')
            .removeClass('password_level_3')
        if (x <= level) {
            this.e.find('.passwd-level-' + x ).addClass('password_level_' + level);
        } 
    }
}
passwordLevel.prototype.clearLevel = function () {
    this.e
    .removeClass().removeClass().removeClass();
}

/* ==================== 发送手机激活码： ==================== 
 *  var codeBtn = new sendCodeButton('#code-button');
 */
var sendCodeButton = function(e, options) {
    options = options || {};
    var _this = this;
    this.e = $(e);
    //this.state = false;
    this.state = true;
    this.buttonText = typeof(options.buttonText) == 'undefined' ? options.buttonText : '获取短信激活码';
    this.second = typeof(options.second) == 'undefined' ? 5 : options.second;
    this.init();
    return(this);
}
sendCodeButton.prototype.init = function() {
    var _this = this;
    this.e.click(function(){
        //_this.start(_this.second);
    });
    return(this);
}
sendCodeButton.prototype.start = function (second) {
    if (this.state) return;
    this.state = true;
    var _this = this;
    this.e.attr('disabled', true);
    //this.e.css('background', '-webkit-linear-gradient(top,#F3F3F3,#CDCDCD)');
    this.e.addClass('no-nb').removeClass('have-nb');
    //this.e.attr('sec', second);
    this.sec = second;
    if(this.intervalProcess){
        window.clearInterval(this.intervalProcess); 
    }
    this.intervalProcess=window.setInterval(function(){_this.refreshText();},1000);
}
sendCodeButton.prototype.stop = function (second) {
    this.e.addClass('have-nb').removeClass('no-nb');
}
sendCodeButton.prototype.setButtonText = function (buttonText) {
    if (this.e.attr('type') == 'button') {
        this.e.val(buttonText);
    } else {
        this.e.text(buttonText);
    };
}
sendCodeButton.prototype.refreshText = function () {
    if (this.sec < 1) {
        clearInterval(this.intervalProcess);
        this.setButtonText('重新发送');
        this.e.attr('disabled', false);
        this.e.addClass('have-nb').removeClass('no-nb');
        this.state = false;
        return;
    } 
    this.setButtonText('重新发送' + '(' + this.sec + 's)');
    this.sec = this.sec - 1;
}




var simpleWindow = function(options) {
    options = options || {};

    this.title           = options.title ;
    this.secTrigger      = options.secTrigger || null;
    this.contentHtml     = options.contentHtml || null;
    this.simpleWindowId  = 'simplewindow-' + Math.ceil(Math.random()* 10000);
    this.contentAjaxUrl  = options.contentAjaxUrl || null;
    this.contentAjaxData = options.contentAjaxData || {};
    this.contentAjaxCallback = options.contentAjaxCallback || null;
    this.contentRefresh = options.contentRefresh || false;
    this.contentLoaded = false;

    this.e = $('<div id="' + this.simpleWindowId + '" class="tcbox" style="border:1px solid #999;position:fixed;display:none;z-index:1999;">' + 
                    '<div class="t">'+this.title+'<a  class="close ' + this.simpleWindowId + '" id="close-' + this.simpleWindowId + '"></a></div>' + 
                    '<div class="c-pad1" id="window-content-' + this.simpleWindowId + '">' + this.contentHtml + '</div>' + 
                '</div>');
    $("body").prepend(this.e);
    this.b = $('<div id="background-' + this.simpleWindowId + '" style="display:none;width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; background-color: rgba(0,0,0, 0.619608);z-index:1997;">  </div>')
    $("body").prepend(this.b);
    //this.e = $(this.simpleWindowId);
    this.init();
    return(this);
}
simpleWindow.prototype.init = function() {
    var _this = this;
    this.e.hide();
    var e_height = this.e.outerHeight();
    var e_width  = this.e.outerWidth();
    this.e
        .css('top', $(window).height()/2 - e_height/2)
        .css('left', $(window).width()/2 - e_width/2);
    $('.' + this.simpleWindowId).live('click',function(){
        _this.hideWindow();
        //$('#' + _this.simpleWindowId).hide();
    });
    return(this);
}
simpleWindow.prototype.hideWindow = function() {
    this.e.hide();
    this.hideBackground();
}
simpleWindow.prototype.showBackground = function() {
    this.b.show();
};
simpleWindow.prototype.hideBackground = function() {
    this.b.hide();
};
simpleWindow.prototype.showWindow = function(sec) {
    if (!this.contentHtml && (!this.contentLoaded || this.contentRefresh )) {
        var _this = this;
        $('#window-content-' + this.simpleWindowId).load(this.contentAjaxUrl, this.contentAjaxData, function(responseText, textStatus, jqXHR){if (_this.contentAjaxCallback) _this.contentAjaxCallback(responseText, textStatus, jqXHR)});
    }
    if (sec) this.timeout(sec)
    this.e.show();
    this.showBackground();
    this.contentLoaded = true;
};
simpleWindow.prototype.timeout = function(sec) {
    var _this = this;
    this.sec = sec
    if (_this.secTrigger)  _this.secTrigger(_this.sec);
    this.intervalProcess=window.setInterval(function(){
        _this.sec --;
        if (_this.secTrigger)  _this.secTrigger(_this.sec);
        if (_this.sec < 0) {
            clearInterval(_this.intervalProcess);
            _this.hideWindow();
            return false;
        }
    },1000);
    this.e.hide();
};


var _jumpTo = $('#success-jump-to');
var _jumpUrl = _jumpTo.attr('url');
if (typeof(_jumpUrl) != 'undefined') {
    var _jumpSec = _jumpTo.attr('time');
    var _jumpText = $('#success-jump-span');
    if (typeof(_jumpUrl) != 'undefined') {
        var timer = window.setInterval(function(){
            _jumpSec --;
            _jumpText.html(_jumpSec);
    
            if (_jumpSec <= 0) {
                clearInterval(timer);
                window.location.href=_jumpUrl;
            }
        },1000);
    }
}

/* ==================== 文本输入框放大效果： ==================== 
 *  new TextMagnifier({ 
 *      inputElem          :     'inputElem',     // 输入框目标元素
 *      parentCls          :     '.parentCls',     // 目标元素的父类
 *      align              :     'right',            // 对齐方式有 ['top','bottom','left','right']四种 默认为top
 *      splitType          :     [3,4,4],          // 拆分规则
 *      delimiter          :     '-'                // 分隔符可自定义
 *  };
 */
function TextMagnifier(options) {

    this.config = {
        inputElem          :     '.inputElem',     
        parentCls          :     '.parentCls',     
        align              :     'right',            
        splitType          :     [3,4,4],          
        delimiter          :     '-'                
    };
    this.cache = {
        isFlag  :  false
    };
    this.init(options);
}

TextMagnifier.prototype = {
    constructor: TextMagnifier,
    init: function(options) {
        this.config = $.extend(this.config,options || {});
        var self = this,
            _config = self.config,
            _cache = self.cache;
        self._bindEnv();
    },
    _appendHTML: function($this,value) {
        var self = this,
        _config = self.config,
        _cache = self.cache;
        var html = '',
            $parent = $($this).closest(_config.parentCls);

        if($('.js-max-input',$parent).length == 0) {
            html += '<div class="js-max-input"></div>';
            $($parent).append(html);
        }
        var value = self._formatStr(value);
        $('.js-max-input',$parent).html(value);
    },

    _position: function(target){
        var self = this,
        _config = self.config;
        var elemWidth = $(target).outerWidth(),
            elemHeight = $(target).outerHeight(),
            elemParent = $(target).closest(_config.parentCls),
            containerHeight = $('.js-max-input',elemParent).outerHeight(); 
        $(elemParent).css({"position":'relative'});

        switch(true){
            case _config.align == 'top':
                $('.js-max-input',elemParent).css({'position':'absolute','top' :-elemHeight - containerHeight/2,'left':0});
                break;
            case _config.align == 'left':
                $('.js-max-input',elemParent).css({'position':'absolute','top' :0,'left':0});
                break;
            case _config.align == 'bottom':
                $('.js-max-input',elemParent).css({'position':'absolute','top' :elemHeight + 4 + 'px','left':0});
                break;
            case _config.align == 'right':
                $('.js-max-input',elemParent).css({'position':'absolute','top' :0,'left':elemWidth + 2 + 'px'});
                break;
        }
    },
    _bindEnv: function(){
        var self = this,
        _config = self.config,
        _cache = self.cache;

        $(_config.inputElem).each(function(index,item){
            $(item).keyup(function(e){
                var value = $.trim(e.target.value),
                parent = $(this).closest(_config.parentCls);
            if(value == '') {
                self._hide(parent);
            }else {
                var html = $.trim($('.js-max-input',parent).html());
                if(html != '') {
                    self._show(parent);
                }
            }
            self._appendHTML($(this),value);
            self._position($(this));
            });

            $(item).unbind('focusin');
            $(item).bind('focusin',function(){
                var parent = $(this).closest(_config.parentCls),
                html = $.trim($('.js-max-input',parent).html());

            if(html != '') {
                self._show(parent);
            }
            });

            $(item).unbind('focusout');
            $(item).bind('focusout',function(){
                var parent = $(this).closest(_config.parentCls);
                self._hide(parent);
            });
        });
    },
    _formatStr: function(str){
        var self = this,
        _config = self.config,
        _cache = self.cache;
        var count = 0,
            output = [];
        for(var i = 0, ilen = _config.splitType.length; i < ilen; i++){
            var s = str.substr(count,_config.splitType[i]);
            if(s.length > 0){
                output.push(s);
            }
            count+= _config.splitType[i];
        }
        return output.join(_config.delimiter);
    },
    _show: function(parent) {
        var self = this,
        _config = self.config,
        _cache = self.cache;
        if(!_cache.isFlag) {
            $('.js-max-input',parent).show();
            _cache.isFlag = true;
        }
    },
    _hide: function(parent) {
        var self = this,
        _config = self.config,
        _cache = self.cache;
        if(_cache.isFlag) {
            $('.js-max-input',parent).hide();
            _cache.isFlag = false;
        }
    }
};
 
 
var pub = {};
//刷新验证码图片 例子：<img id='veryfi-image' src=''>    pub.resetVerifyCode('#verify-image');
pub.resetVerifyCode = function(e){
    $(e).attr("src",XZWebUrlWriter.getAjax_GetVerifyCode());
};
// 此账号是否已注册
pub.verifyRegist = function(user){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckRegistExist(),{user:user});
};

// 手机号是否已注册
pub.mobileExist = function(mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckMobileExist(mobile));
};

//  邮箱是否已注册
pub.emailExist = function(email) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckEmailExist(), {email:email});
};
//  用户名(昵称)是否已注册
pub.usernameExist = function(username) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckUsernameExist(username), {});
};
//  老(登录)用户名是否存在
pub.oldUsernameExist = function(username) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckOldUsernameExist(username), {});
};

// 检查图片验证码
pub.checkVerifyCode=function(verifyCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckVerifyCode(),{verifycode:verifyCode});
};

// 发送手机激活码
pub.sendAvtivateCode=function(verifyCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_SendActivateCode(mobile,verifyCode));
};
// 发送找回密码手机激活码
pub.sendConfirmCode=function(verifyCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_SendConfirmCode(mobile,verifyCode));
};
//发送快速登录手机验证码
pub.sendQuickLoginCode = function(verifyCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_SendQuickLoginCode(mobile,verifyCode));
};
// 验证找回密码手机激活码
pub.checkConfirmCode=function(confirmCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckConfirmCode(mobile,confirmCode));
};

// 验证手机激活码
pub.checkActivateCode=function(mobile, activateCode){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckActiveCode(mobile,activateCode));
};

// 验证注册邀请码
pub.checkInviteCode = function(inviteCode){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckInviteCode(inviteCode)); 
}

// 用手机号注册
pub.doRegisterByMobile=function(mobile, username, password, activateCode, next,createfrom,comefrom,referrer,inviteCode,lodgeid,ajaxShowSucc){
    var inviteCode = !inviteCode ? '' : inviteCode; 
    var lodgeid    = !lodgeid ? '' : lodgeid; 
    var ajaxShowSucc = ajaxShowSucc ? ajaxShowSucc : false;
    return XZWebAjax.post(XZWebUrlWriter.getAjax_RegisterByMobile(),{
        username:username,
        phone:mobile,
        password:password,
        imagecode:activateCode,
        next:next,
        createfrom:createfrom,
        comefrom:comefrom,
        referrer:referrer,
        invitecode:inviteCode,
        lodgeid:lodgeid,
        ajaxshowsucc : ajaxShowSucc
    });
}

// 用邮箱注册
pub.doRegisterByEmail=function(email, username, password, country, passport,createfrom,comefrom,referrer,lodgeid){
     lodgeid    = !lodgeid ? '' : lodgeid; 
    return XZWebAjax.post(XZWebUrlWriter.getAjax_RegisterByEmail(),{email:email, username:username, password:password, country:country, passport:passport, createfrom:createfrom, comefrom:comefrom, referrer:referrer, lodgeid:lodgeid });
}

// 发送激活邮件
pub.sendActivateEmail=function(uid, uidtoken){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_ReSendActiveEmail(uid,uidtoken),{});
}
// 修改注册时邮箱
pub.changeActivateEmail=function(email){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_ChangeActiveEmail(),{email:email});
}

// 登录
pub.doLogin=function(emailOrMobile,  password, verifyCode,setcookie,lodgeid){
    if(typeof(lodgeid)=='undefined'||lodgeid==''){
      return XZWebAjax.post(XZWebUrlWriter.getAjax_Login(),{username:emailOrMobile, password:password, verifycode:verifyCode, setcookie:setcookie});   
    }
    return XZWebAjax.post(XZWebUrlWriter.getAjax_Login(),{username:emailOrMobile, password:password, verifycode:verifyCode, setcookie:setcookie,lodgeid:lodgeid});
}

// 手机快捷登录
pub.doLoginMobile=function(mobile, verifyCode,setcookie,lodgeid){
    if(typeof(lodgeid)=='undefined'||lodgeid==''){
      return XZWebAjax.post(XZWebUrlWriter.getAjax_LoginMobile(),{usermobile:mobile, verifycode:verifyCode, setcookie:setcookie});   
    }
    return XZWebAjax.post(XZWebUrlWriter.getAjax_LoginMobile(),{usermobile:mobile, verifycode:verifyCode, setcookie:setcookie,lodgeid:lodgeid});
}

// 找回密码:手机号
pub.findPasswordByMobile=function(mobile, confirmCode, newPassword) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_FindPasswordByMobile(),{mobile:mobile, confirmcode:confirmCode, password:newPassword});
}
// 找回密码=邮箱
pub.findPasswordByEmail=function(email) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_FindPasswordByEmail(),{email:email});
}

// 找回密码:设置新密码
pub.findToSetPassword=function(password, state) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_ResetPasswordFromEmail(),{password:password, state:state});
}
// 合作账户绑定 已有小猪账户
pub.bindOpenAccount=function(mobileOrEmail, password, verifyCode) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_BindOpenAccount(),{account:mobileOrEmail,password:password, verifycode:verifyCode});
}
// 合作账户绑定 新小猪账户 完善信息
pub.bindOpenAccountRegister=function(mobile,email,username,activateCode, country, passport,inviteCode) {
    inviteCode = !inviteCode ? '' : inviteCode;
    return XZWebAjax.post(XZWebUrlWriter.getAjax_OpenAccountRegister(),{mobile:mobile,email:email,username:username,activatecode:activateCode, country:country, passport:passport,invitecode:inviteCode});
}

pub.getAjax = function(url, ajaxData) {
    if (!ajaxData) var ajaxData = {};
    var nexturl = $('input[name=next]').val();
    if (nexturl){ajaxData.next = nexturl;}
    var returnData;
    $.ajax({
        type     : "POST",
        url      : url,
        data     : ajaxData,
        dataType : 'json',
        async    : false,
        success  : function(datas){returnData = datas;},
        error : function (XMLHttpRequest, textStatus, errorThrown){
            alert('网络错误,请刷新页面重试:'+textStatus);
        }
    });
    return returnData;
};

var book = {};
// 移除入住人信息
book.tenantRemove = function(tenantId) {
    return pub.getAjax(XZWebUrlWriter.getAjax_TenantRemove(), {tenantid:tenantId});
}
 
 /*********************************************************************
* 注册登录相关模块组件和基础功能
* 使用时引入该类提供平台通用功能，如果特殊页面存在特殊需求请通过继承
* 或者重新定义覆盖对应方法的实现。
*********************************************************************/
var RegisterLoginComponent = {
    //{{{
    initInputMobile : function(options){
        //{{{
        var that = this;
        var options = options || {};
        options = $.extend({
            element : '#input-mobile',
            tipHolder : '#input-mobile-tip',
            defaultPlaceHolder : '手机号',
            focusPlaceHolder : '仅限大陆手机号',
            existCheck : true
        },options);
        var input_mobile = new inputBox(options.element,options.tipHolder,{
            placeHolder:options.defaultPlaceHolder
        });
        input_mobile.e.focus(function(){
            input_mobile.setPlaceholder(options.focusPlaceHolder);
        })
        .blur(function(){
            input_mobile.setPlaceholder(options.defaultPlaceHolder);
            var checker = checkmobile($(this).val());
            if (checker.rst == false) {
                input_mobile.showError(checker.msg);
                input_mobile.e.addClass('r_input_1_cur');
                return true;
            }
            if(options.existCheck){
                $.when(that.checkMobileExist($(this).val()))
                .done(function(ajaxChecker){
                    if(ajaxChecker.status == 0) {
                        input_mobile.showError(ajaxChecker.errmsg);
                        input_mobile.e.addClass('r_input_1_cur');
                    } else{
                        input_mobile.status = true;
                    } 
                });
            } else {
                input_mobile.status = true;
            }
        })
        .keyup(function(){
            input_mobile.i.hide();
            input_mobile.e.removeClass('r_input_1_cur');
        });
        
        return input_mobile;
        //}}}
    },
    initInputImageVerifyCode : function(options){
        //{{{
        var that = this;
        var options = options || {};
        options = $.extend({
            element : '#image-verify-code',
            tipHolder : '#image-verify-code-tip',
            defaultPlaceHolder : '图片验证码',
            focusPlaceHolder : '图片验证码'
        },options);
        var input_imageVerifyCode = new inputBox(options.element, options.tipHolder, {placeHolder:options.defaultPlaceHolder});
        input_imageVerifyCode.codeSendSuc = false;
        input_imageVerifyCode.e.blur(function(){
            if(input_imageVerifyCode.codeSendSuc){
                return true; 
            }
            var verifyCode = $(this).val();
            var checker = checkverifyCode(verifyCode);
            if (checker.rst == false) {
                input_imageVerifyCode.showError(checker.msg);
                input_imageVerifyCode.e.addClass('r_input_small_cur');
                return true;
            }
            input_imageVerifyCode.isAjaxChecking = true;
            $.when(that.checkImageVerifyCode(input_imageVerifyCode.e.val()))
            .done(function(ajaxChecker){
                if (ajaxChecker.status == 0) {
                    input_imageVerifyCode.showError(ajaxChecker.errmsg);
                    input_imageVerifyCode.e.addClass('r_input_small_cur');
                } else {
                    input_imageVerifyCode.status = true;
                }
                input_imageVerifyCode.isAjaxChecking = false;
            });
            
            
        })
        .keyup(function(){
            input_imageVerifyCode.i.hide();
            input_imageVerifyCode.e.removeClass('r_input_small_cur');
        });
        $('.change-verify-image').live('click',function(){
            $('img.change-verify-image').attr('src','');
            pub.resetVerifyCode('img.change-verify-image');
        });

        return input_imageVerifyCode;
        //}}}
    },
    initInputInviteCode : function(options){
        //{{{
        options = options || {};
        options = $.extend({
            element : '#invitecode',
            tipHolder : '#input-invitecode-tip'
        },options);
        var input_inviteCode = new inputBox(options.element,options.tipHolder,{
            placeHolder:'邀请码（选填）'
        });
        input_inviteCode.checkInviteCode = function(){
            //{{{
            if(this.e.val() == '') return true;
            ajaxChecker = pub.checkInviteCode(this.e.val());
            if(ajaxChecker.status != 1){
                $(options.tipHolder).show().parent('.h_30').show();
                input_inviteCode.e.addClass('r_input_1_cur');
                return false;
            } else {
                $(options.tipHolder).hide().parent('.h_30').hide();
                input_inviteCode.e.removeClass('r_input_1_cur');
                input_inviteCode.status = true;
                return true;
            }
            //}}}
        }
        input_inviteCode.e.keydown(function(){
            $(options.tipHolder).hide().parent('.h_30').hide(); 
            input_inviteCode.e.removeClass('r_input_1_cur');
        });

        return input_inviteCode;
        //}}}
    },
    initInputUserName : function(options){
        //{{{
        var that = this;
        var options = options || {};
        options = $.extend({
            element : '#reginput-username',
            tipHolder : '#reginput-username-tip',
            defaultPlaceHolder : '用户名',
            focusPlaceHolder : '请输入汉字、英文、数字或下划线',
            existCheck : true
        },options);
        var input_username = new inputBox(options.element, options.tipHolder,{
            placeHolder:options.defaultPlaceHolder
        });
        input_username.e.focus(function(){
            input_username.setPlaceholder(options.focusPlaceHolder);
        });
        input_username.e.keyup(function(){
            input_username.i.hide();
            input_username.e.removeClass('r_input_1_cur');
        })
        .blur(function(){
            input_username.setPlaceholder(options.defaultPlaceHolder);
            var checker = checkusername($(this).val());
            if (checker.rst == false) {
                input_username.showError(checker.msg);
                input_username.e.addClass('r_input_1_cur');
                return true;
            }
            input_username.isAjaxChecking = true;
            $.when(that.checkUserNameExist($(this).val()))
             .done(function(ajaxChecker){
                if(ajaxChecker.status == 0) {
                    input_username.showError(ajaxChecker.errmsg);
                    input_username.e.addClass('r_input_1_cur');
                } else {
                    input_username.status = true;
                }
                input_username.isAjaxChecking = false;
            });
        });
        
        return input_username;
        //}}}
    },
    initInputPassWord : function(options){
        //{{{
        options = options || {};
        options = $.extend({
            element : '#regpassword',
            tipHolder : '#regpassword-tip',
            defaultPlaceHolder : '密码',
            focusPlaceHolder : '密码'
        },options);
        var input_password = new inputBox(options.element, options.tipHolder, {
            placeHolder:options.defaultPlaceHolder
        });
        input_password.e.keyup(function(){
            input_password.i.hide();
            input_password.e.removeClass('r_input_1_cur');
        }).focus(function(){
            input_password.setPlaceholder(options.focusPlaceHolder);
        })
        .blur(function(){
            var checker = checkpassword($(this).val());
            if (checker.rst == false){
                input_password.showError(checker.msg);
                input_password.e.addClass('r_input_1_cur');
                return true;
            } 
            input_password.status = true;
        })
        .bind('paste',function(e){
            e.preventDefault(); 
        });
        
        return input_password;
        //}}}
    },
    /*initInputMobileActiveCode : function(){
        //{{{
        var that = this;
        var input_mobileActivateCode = new inputBox('#activate-code', '#activate-code-tip', {
            placeHolder:'手机验证码'
        });
        input_mobileActivateCode.e.keyup(function(){
            input_mobileActivateCode.i.hide();
        }).blur(function(){
            var activateCode = $(this).val();
            var checker = checkactivateCode(activateCode);
            if (checker.rst == false) {
                input_mobileActivateCode.showError(checker.msg);
                return true;
            }
            ajaxCheck = pub.checkConfirmCode(input_mobileActivateCode.e.val(),input_mobile.e.val());
            if (ajaxCheck.status == 0){
                input_mobileActivateCode.showError(ajaxCheck.errmsg);
                return true;
            } 
            input_mobileActivateCode.status = true;
        });

        return input_mobileActivateCode;
        //}}}
    },*/
    initInputEmail : function(options){
        //{{{
        var that = this;
        var options = options || {};
        options = $.extend({
            'defaultPlaceHolder' : '邮箱',
            'existCheck' : true,
            'existCheckFind' :false
        },options);

        var input_email = new inputBox('#input-email', '#input-email-tip', {
            placeHolder:options.defaultPlaceHolder
        });
        input_email.e.blur(function(){
            var checker = checkemail($(this).val());
            if (checker.rst == false) {
                input_email.showError(checker.msg);
                input_email.e.addClass('r_input_1_cur');
                return false;
            }
            if(options.existCheck){ 
                $.when(that.checkEmailExist($(this).val())).done(function(ajaxChecker){
                    if(ajaxChecker.status == 0) {
                        input_email.showError(ajaxChecker.errmsg);
                        input_email.e.addClass('r_input_1_cur');
                    } else {
                        input_email.status = true;
                    }
                });
            } else if(options.existCheckFind){
                var ajaxCheckerFind = pub.emailExist($(this).val());
                if(ajaxCheckerFind.status == 1) {
                    input_email.showError("邮箱不存在");
                    input_email.e.addClass('r_input_1_cur');
                } else {
                    input_email.status = true;
                }
            } else {
                input_email.status = true;
            }
        }).keydown(function(){
            input_email.i.hide();
            input_email.e.removeClass('r_input_1_cur');
        });

        return input_email;
        //}}}
    },
    initSelectCountry : function(){
        //{{{
        var that = this;
        var input_country = new inputBox('#input-country', '#input-country-tip');   
        input_country.e.blur(function(){
            if(!that.showSelect){
               $('.r_select_list').hide();
            }
            if (!input_country.e.val()){
                input_country.showError('请选择国家/地区');
                input_country.e.closest('.r_input_1').addClass('r_input_1_cur');
            } else { 
                input_country.status = true;
            }
        }).click(function(){
            $('.r_select_list').show();
        }).change(function(){
            input_country.i.hide();
            input_country.e.closest('.r_input_1').removeClass('r_input_1_cur');
        });
        $('.r_select_arrow').click(function(){
            $('.r_select_list').show();
            setTimeout(function(){
                that.btnClick = true;
            },500);
        });
        $('body').click(function(){
            if($('.r_select_list:visible').length && that.btnClick){
                $('.r_select_list').hide();
                that.btnClick = false;
            }
        });
        $('.r_select_box .place-holder-sm').addClass('place-holder-sm-pos');
        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0"){
            $('.r_select_box .place-holder-sm').css('margin-left','-98px');
        }
        $('.r_select_list').mouseenter(function(){
            that.showSelect = true;
        }).mouseleave(function(){
            that.showSelect = false;
        });
        $('.r_select_list li').click(function(e){
            input_country.e.val($(this).html()); 
            input_country.e.countryId = $(this).attr('data-id');
            $('.r_select_list').hide();
            $('.r_select_box .place-holder-sm').hide();
            input_country.i.hide();
            input_country.e.closest('.r_input_1').removeClass('r_input_1_cur');
        });

        return input_country;
        //}}}
    },
    /*
    initGetActiveCodeBtn : function(){
        //{{{
        var that = this;
        var getcode_btn = new sendCodeButton('#get-code-btn');
        getcode_btn.state = false;
        getcode_btn.setButtonText('获取手机验证码');
        getcode_btn.e.click(function(){
            that.input_mobile.e.blur();
            that.input_imageVerifyCode.e.blur();
            if (getcode_btn.state == false){
                that.getActiveCode();    
            } 
        });

        return getcode_btn;
        //}}} 
    },
    */
    checkMobileExist : function(mobile){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckMobileExist(mobile),{},true,function(data){
            defer.resolve(data);
        });
        return defer.promise();
        //}}}
    },
    checkEmailExist : function(email){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckEmailExist(), {email:email},true,function(data){
            defer.resolve(data);
        });
        return defer.promise();
        //}}}
    },
    checkUserNameExist : function(username){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckUsernameExist(username),{},true,function(data){
            defer.resolve(data);
        });
        return defer.promise();
        //}}}
    },
    checkImageVerifyCode : function(verifyCode){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckVerifyCode(),{verifycode:verifyCode},true,function(data){
            defer.resolve(data);
        });
        return defer.promise();
        //}}}
    },
    checkActiveCode : function(mobile,activateCode){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckActiveCode(mobile,activateCode),{},true,function(data){
            defer.resolve(data);
        });
        return defer.promise(); 
        //}}}
    },
    centerRegLoginForm : function(width,height){
        //{{{
        var win = $(window);
        var top = win.scrollTop() + (win.height() - height)/2;
        var left = (win.width() - width)/2;
        left = left >= 200 ? left : 200;
        top = top >= 90 ? top : 90;
        $('.loginbox').css({
                position:'absolute',
                'left': left,
                'top': top,
                'z-index' : 1
        });
        //}}}
    },
    pageLoginDirect : function(){
        //{{{
        $('body').on('click','.login-direct',function(e){
            e.preventDefault();
            var next = $('#next').val();
            window.location.href = $(this).attr('href') + 'next=' + encodeURIComponent(next);
        });  
        //}}}
    }
    //}}}
}
//模拟实现ie低版本placeholder
jQuery(function(){
    //{{{
    jQuery.fn.placeholder = function(){
        var i = document.createElement('input'),
            placeholdersupport = 'placeholder' in i;
        if(!placeholdersupport){
            var inputs = jQuery(this);
            inputs.each(function(){
                var input = jQuery(this),
                text = input.attr('placeholder'),
                pdl = 0,
                height = input.outerHeight(),
                width = input.outerWidth(),
                placeholder = jQuery('<span class="place-holder-sm">'+text+'</span>');
            try{
                pdl = input.css('padding-left').match(/\d*/i)[0] * 1;
            }catch(e){
                pdl = 5;
            }
            placeholder.css({'margin-left': -(width-pdl),'height':height,'line-height':height+"px",'position':'absolute', 'color': "#c2cacd", 'font-size' : "12px"});
            placeholder.click(function(){
                input.focus();
            });
            if(input.val() != ""){
                placeholder.css({display:'none'});
            }else{
                placeholder.css({display:'inline'});
            }
            placeholder.insertAfter(input);
            input.focus(function(e){
                placeholder.html(input.attr('placeholder'));
            });
            input.keyup(function(e){
                if(jQuery(this).val() != ""){
                    placeholder.css({display:'none'});
                }else{
                    placeholder.css({display:'inline'});
                }
            });
            });
        }
        return this;
    };
    $('input[placeholder]').placeholder();
    //}}}
});
 
 $(function(){

})
$(window).load(function() {  

})

 
 $(document).ready(function(){
    var action = $('#actionName').val();
    var userId = $('#loginUserId').val();
    if(userId) {
        _ozuid = userId;
    }
    switch(action) {
        case 'Front_Search':
            _ozurltail="#search";
            var keyWord = $('#putkey').val();
            var startDate = $('#startdate').val();
            var endDate = $('#enddate').val();
            var leaseType = $('#leasetype').val();
            var number = $('#guestnum').val();
            _ozprm = '';
            if(keyWord) {
                _ozprm += 'Keyword='+keyWord+'&';
            }
            if(startDate) {
                _ozprm += 'startDate='+startDate+'&';
            }
            if(endDate) {
                _ozprm += 'endDate='+endDate+'&';
            }
            if(leaseType) {
                _ozprm += 'Lease='+leaseType+'&';
            }
            if(number) {
                _ozprm +='number='+number;
            }
            if(_ozprm.substr(-1,1) === '&') {
                if(_ozprm.length) {
                    _ozprm = _ozprm.substring(0,_ozprm.length-1);
                }
            }
            break;
        case 'Front_Detail':
            var id = $('#lodgeUnitId').val();
            //var _ozurltail="#product";
            _ozprm="id="+id+"&bid="+''+"&cid="+'';
            break;
        case 'Front_BookSuccess':
        case 'Front_BookOrderPayFirstPay':
            var orderId = $('#bookOrderId').val();
            var orderTotal = $('#totalPrice').val();
            var landlord = $('#landlordid').val();
            var luid = $('#luid').val();
            var dayCount = $('#dayCount').val();
            var avgPrice = $('#avgPrice').val();
            _ozprm = "orderid="+orderId+"&ordertotal="+orderTotal+"&landlord="+landlord+"&skulist="+luid+","+avgPrice+","+dayCount+",,,";
            break;
        case 'Front_OrderFirstPayPaySuccess':
        case 'Front_OrderPaySuccess':
            var orderId = $('#bookOrderId').val();
            var totalPrice = $('#totalPrice').val();
            _ozprm = "orderid="+orderId+"&ordertotal="+totalPrice;
            break;
        case 'Front_Mail_Register_Success':
        case 'Front_Register_SuccessPage':
            var userid = $('#userid').val();
            var phone = $('#phone').val();
            var email = $('#usermail').val();
            if(phone) {
                _ozprm = "userid="+userid+"&phone="+phone;
            } else if(email) {
                _ozprm = "userid="+userid+"&email="+email;
            }
            break;
        default:
            break;
    }
    var u= 'http://'+domain+'/js/com/';
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.defer=true; g.async=true; g.src=u+'o_code.js'; 
    s.parentNode.insertBefore(g,s); 
});
 
 $(function(){
    var c=function() {
        var f=$(".xz-bg img");
        var g=f.width()/f.height();
        var e=$(window).width()/$(window).height();
        if(g<e) {
            f.css({
                width:$(window).width(),height:"auto","margin-top":"-"+((f.height()-$(window).height())/2)+"px"
            })
        }else {
            f.css( {
                height:$(window).height(),width:"auto"
            })
        }
    };

    c()
    $(window).on("resize",function() {
        c()
    }
    );
});

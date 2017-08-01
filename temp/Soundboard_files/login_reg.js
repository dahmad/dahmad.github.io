function submit_login_form()
{$('.title2').html('');$.ajax({url:'http://ownagepranks.com/users/login',data:{'data[User][email]':$('#useremail').val(),'data[User][password]':$('#UserPassword').val()},type:'post',dataType:'json',success:function(d){if(d.status==1)
{$('#userlogin').val('');$('#UserPassword').val('');location.reload();}
else
{$('#errorlogin').html(d.msg);$('#errorlogin').show();}},error:function()
{}});return false;}
$(document).ready(function()
{$(document).on('click',".register-btn",function(e){e.preventDefault();$('#regreminder').bPopup().close();$('#simplemodal-login-container').bPopup({closeClass:'bClose',easing:'easeOutBack',speed:1000,transition:'slideDown',onOpen:function(){$('body').addClass('noScroll');},onClose:function(){$('body').removeClass('noScroll');$('.title2').html('');$('#UserUsername').val('');$('#UserEmail').val('');$('#reg_password').val('');$('#reg_confpassword').val('');$('#errorreg').hide();}});return false;});$('#register,#mobregister').click(function()
{$('#loginsectionpp').bPopup().close();$('#forgetsectionpp').bPopup().close();$('#simplemodal-login-container').bPopup({closeClass:'bClose',easing:'easeOutBack',speed:1000,transition:'slideDown',onOpen:function(){$('body').addClass('noScroll');},onClose:function(){$('body').removeClass('noScroll');$('.title2').html('');$('#UserUsername').val('');$('#UserEmail').val('');$('#reg_password').val('');$('#reg_confpassword').val('');$('#errorreg').hide();}});});$('#forget_password,.call_popup_forget').click(function()
{$('#loginsectionpp').bPopup().close();$('#simplemodal-login-container').bPopup().close();$('#forgetsectionpp').bPopup({closeClass:'bClose',easing:'easeOutBack',speed:1000,transition:'slideDown',onOpen:function(){$('body').addClass('noScroll');},onClose:function(){$('body').removeClass('noScroll');$('.title2').html('');$('#forgotemail').val('');$('#errorreg').hide();}});});$('#login,#moblogin').click(function()
{$('#forgetsectionpp').bPopup().close();$('#simplemodal-login-container').bPopup().close();$('#loginsectionpp').bPopup({positionStyle:'fixed',left:'500px',closeClass:'bClose',easing:'easeOutBack',speed:1000,transition:'slideUp',onOpen:function(){$('body').addClass('noScroll');},onClose:function()
{$('body').removeClass('noScroll');$('#useremail').val('');$('#UserPassword').val('');$('#errorlogin').hide();}});});$('#btnsave').live('click',function()
{$('.title2').html('');$('label.error').html('');$('label.error').css('display','none');$('#errorreg').hide();if($('#accept_terms').is(':checked'))
{$.ajax({url:'http://ownagepranks.com/users/register',data:{'data[User][Name]':$('#UserName').val(),'data[User][username]':$('#UserUsername').val(),'data[User][email]':$('#UserEmail').val(),'data[User][password]':$('#reg_password').val(),'data[User][confirmpassword]':$('#reg_confpassword').val(),'data[User][is_subscriber]':$('#subscribe_alert').is(':checked')?1:0},type:'post',dataType:'json',success:function(d){if(d.status==1)
{$('#errorreg').hide();$('#resporeg').html('Thank you for registering at ownagepranks.com. Please click on the confirmation link sent at your email id.');$('#UserName').val('');$('#UserUsername').val('');$('#UserEmail').val('');$('#reg_password').val('');$('#reg_confpassword').val('');$('#resporeg').fadeOut(10000);}
else
{$('#errorreg').html(d.msg);$('#errorreg').show();}},error:function()
{}});}else{$('#errorreg').html('Please tick checkbox to accept Terms of Service and Privacy Policy of this service.');$('#errorreg').show();}});$('#btnforget').live('click',function()
{$('.title1').html('');$('label.error').html('');$('label.error').css('display','none');$('#errorforget').hide();$.ajax({url:'http://ownagepranks.com/users/forgot_password',data:{'data[User][email]':$('#forgotemail').val()},type:'post',dataType:'json',success:function(d){if(d.status==1)
{$('#errorforget').hide();$('#forgetoreg').html(d.msg);$('#forgetoreg').show();$('#forgotemail').val('');$('#forgetoreg').fadeOut(10000);}
else
{$('#errorforget').html(d.msg);$('#errorforget').show();}},error:function()
{}});});$('.subscriber_btn').live('click',function()
{var name=$('#subscribername').val();var email=$('#subscriberemail').val();var reg=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;var error=reg.test(email);if(email==null||email==''||error==false||name==null||name=='')
{if(name==null||name=='')
{$('#errorsubscribername').html('Please enter your name');$('#errorsubscribername').show();}
else
{$('#errorsubscribername').hide();}
if(email==null||email=='')
{$('#errorsubscriberemail').html('Please enter your email');$('#errorsubscriberemail').show();}
else if(email!=''||error==false)
{$('#errorsubscriberemail').html('Please enter the correct email');$('#errorsubscriberemail').show();}
else{$('#errorsubscriberemail').hide();}
return false;}
else
{$.ajax({url:'http://ownagepranks.com/users/subscriber',data:{'data[Subscriber][name]':$('#subscribername').val(),'data[Subscriber][email]':$('#subscriberemail').val()},type:'post',success:function(d){if(d=='true')
{$('#errorsubscribername').hide();$('#errorsubscriberemail').hide();$('#subscribername').val('');$('#subscribername').attr('placeholder','Name');$('#subscriberemail').val('');$('#subscriberemail').attr('placeholder','Email');$('#subscriberSuccess').html('You are now subscribed to Ownage Pranks');$('#subscriberSuccess').css('display','block');setTimeout(function(){$('#subscriberSuccess').fadeOut('100000');},5000);}
else
{$('#errorsubscriberemail').html('Already subscribed with this email');$('#errorsubscriberemail').show();}},error:function()
{}});}});$('.subscriber_btn_ft').live('click',function()
{var name=$('#subscribername_ft').val();var email=$('#subscriberemail_ft').val();var reg=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;var error=reg.test(email);if(email==null||email==''||error==false||name==null||name=='')
{if(name==null||name=='')
{$('#errorsubscribername_ft').html('Please enter your name');$('#errorsubscribername_ft').show();}
else
{$('#errorsubscribername_ft').hide();}
if(email==null||email=='')
{$('#errorsubscriberemail_ft').html('Please enter your email');$('#errorsubscriberemail_ft').show();}
else if(email!=''||error==false)
{$('#errorsubscriberemail_ft').html('Please enter the correct email');$('#errorsubscriberemail_ft').show();}
else{$('#errorsubscriberemail_ft').hide();}
return false;}
else
{$.ajax({url:'http://ownagepranks.com/users/subscriber',data:{'data[Subscriber][name]':$('#subscribername_ft').val(),'data[Subscriber][email]':$('#subscriberemail_ft').val()},type:'post',success:function(d){if(d=='true')
{$('#errorsubscribername_ft').hide();$('#errorsubscriberemail_ft').hide();$('#subscribername_ft').val('');$('#subscribername_ft').attr('placeholder','Name');$('#subscriberemail_ft').val('');$('#subscriberemail_ft').attr('placeholder','Email');$('#subscriberSuccess_ft').html('You are now subscribed to Ownage Pranks');$('#subscriberSuccess_ft').css('display','block');setTimeout(function(){$('#subscriberSuccess_ft').fadeOut('100000');},5000);}
else
{$('#errorsubscriberemail_ft').html('Already subscribed with this email');$('#errorsubscriberemail_ft').show();}},error:function()
{}});}});});
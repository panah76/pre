@extends('index')
@section('content')
    <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section class="bg-white contact-gallery">
      <div class="container">
        <div class="row">
<div class="col-6 float-lg-start">
       <div class="header mt-5">
          <li><a href="contact.html"> <h1 class="fw-bolder mt-lg-5 mt-sm-0">ارتباط با ما
          </h1></a></li>

       </div>
       <div class="row">
        <h3 class="mt-5" style="color: black;">ادرس:</h3>
        <p class="mb-5 py-4">
          131 Percy Road,Whitton,Richmond,London,United<br>
          Kingdom,TW2 6HT
        </p>
       </div>
       <div class="row">
        <h3 class="mt-5" style="color: black;">روزهای کاری فروشگاه:
        </h3>
        <p> Monday </p>
        <p>Tuesday</p>
         <p>Wednesday</p>
         <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>

          <p class="mt-3">Tel:020 36321468</p>
          <p>Fax:020 36321468</p>
          <p>Email:<span class="text-primary text-decoration-underline">Pov@gmail.com</span></p>
      </div>

<div class="section-ba">

    <h2>ارسال پیام به ما</h2>
   <div class="row mb-3">
    <div class="col">
    <input type="text" name="fname" placeholder="نام *">
    </div>
    <div class="col">
    <input type="text" name="lname" placeholder="نام خانوادگی *">
    </div>
  </div>
    <div class="row mb-3">
      <div class="col">
    <input type="email" name="email" placeholder="ادرس ایمیل *">
    </div>
    <div class="col">
    <input type="text" name="phone" placeholder="شماره تماس *">
  </div>
</div>


<div class="row align-items-center align-content-center mt-5 mb-5 ">
  <div class="col-6">
  <a href="#" class="btn1-get  scrollto">ارسال</a>
  </div>

</div>
  </div>
  </div>
</div>

         </section>
  </main><!-- End #main -->

@endsection

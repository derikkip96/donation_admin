 <!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Admin </title>
        <!-- plugins:css -->


        <link rel="stylesheet" href="{{ asset('admin/assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css') }}">
        <link rel="stylesheet" href="{{ asset('admin/assets/vendors/iconfonts/ionicons/css/ionicons.css') }}">
        <link rel="stylesheet" href="{{ asset('admin/assets/vendors/iconfonts/typicons/src/font/typicons.css') }}">
        <link rel="stylesheet" href="{{ asset('admin/assets/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css') }}">
        <link rel="stylesheet" href="{{ asset('admin/assets/vendors/css/vendor.bundle.base.css') }}">
        <link rel="stylesheet" href="{{ asset('admin/assets/vendors/css/vendor.bundle.addons.css') }}">
        <!-- endinject -->
        <!-- plugin css for this page -->
        <!-- End plugin css for this page -->
        <!-- inject:css -->
        <link rel="stylesheet" href="{{ asset('admin/assets/css/shared/style.css') }}">
        <!-- endinject -->
        <!-- Layout styles -->
        <link rel="stylesheet" href="{{ asset('admin/assets/css/demo_1/style.css') }}">
        <!-- End Layout styles -->
        <link rel="shortcut icon" href="../assets/images/favicon.png" />

      </head>
  <body>
    <div class="container-scroller">
      <!-- partial:partials/_navbar.html -->
      <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
            <a class="navbar-brand brand-logo" href="index.html">
            <p>Admin</p>
            <a class="navbar-brand brand-logo-mini" href="index.html">
             
            </a>
          </div>
        <div class="navbar-menu-wrapper d-flex align-items-center">
          <form class="ml-auto search-form d-none d-md-block" action="#">
            <div class="form-group">
              <input type="search" class="form-control" placeholder="Search Here">
            </div>
          </form>
          <ul class="navbar-nav ml-auto">
           
            <li class="nav-item dropdown d-none d-xl-inline-block user-dropdown">
              <a class="nav-link" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <img class="img-xs rounded-circle" src="{{ asset(url('admin/assets/images/faces/face8.jpg'))}}" alt="Profile image">
               </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div class="dropdown-header text-center">
                  <img class="img-md rounded-circle"  src="{{ asset(url('admin/assets/images/faces/face8.jpg'))}}"  alt="Profile image">
                <p class="mb-1 mt-3 font-weight-semibold">{{auth()->user()->name}}</p>
                <p class="font-weight-light text-muted mb-0">{{auth()->user()->email}}</p>
                </div>
                <a class="dropdown-item" href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                                  document.getElementById('logout-form').submit();">
                    {{ __('Sign Out') }}
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
              </div>
            </li>
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>

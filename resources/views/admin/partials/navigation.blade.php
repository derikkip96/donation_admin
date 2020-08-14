



  <div class="container-fluid page-body-wrapper">
    <!-- partial:partials/_sidebar.html -->
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="#" class="nav-link">
          
            <div class="text-wrapper">
            <p class="profile-name">{{auth()->user()->name}}</p>

            </div>
          </a>
        </li>
        <li class="nav-item nav-category">Main Menu</li>
        <li class="nav-item">
          <a class="nav-link" href="{{url('/home')}}">
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Payments</span>
          </a>
        </li>

      </ul>
    </nav>
    <div class="main-panel">
        <div class="content-wrapper">

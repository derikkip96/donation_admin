@extends('admin.layouts.app')
@section('Title','Index Page')
  @section('content')

<div class="row">
  <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-header">
            <h2> Payment List</h2>
        </div>
      <div class="card-body">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Ref</th>
                    <th>Donor's name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Transaction Date</th>
                   
                </head>
                <tbody>
                  @foreach ($transactions as $transaction)
                   <tr>
                   <td>{{$transaction->reference}}</td>
                   <td>{{$transaction->first_name." ".$transaction->last_name}}</td>
                   <td>{{$transaction->email}}</td>
                    <td>{{$transaction->phone}}</td>
                   <td>{{$transaction->amount}}</td>
                   <td>{{$transaction->status}}</td>
                   <td>{{$transaction->transaction_date}}</td>
                   </tr>
                  @endforeach 
                 </tbody>
        </table>
      </div>
    </div>
  </div>
</div>





  @endsection

<!DOCTYPE html>
<html>
@include('layouts.head')
<body class='index'>
@include('_partials.map')
        <div class="header-title">
            <p>Planine Bosne i Herzegovine</p>       
        </div>
        
        <div class="search">
            <form class="form-inline" role="form">
                <div class="form-group">
                   <input type="text" class="typeahead form-control" placeholder='start to type ...'>        
                </div>
                &nbsp;<span class="middle-text">or choose</span>&nbsp;
                <div class="form-group">
                    <select class="form-control select-destination">
                        <option>Vlasic</option>
                        <option>Maglic</option>
                        <option>Prenj</option>
                    </select>          
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success select-button show-google-map">Go</button>
                </div>    
            </form>   
        </div>
       

</body>
  @include('layouts.scripts')
</html>

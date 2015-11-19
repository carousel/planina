<!DOCTYPE html>
<html>
@include('layouts.head')
<body>
@include('_partials.map')
        <div class="header-title">
            <p>Mountains of Bosnia and Herzegovina</p>       
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
                        <option>Cincar</option>
                        <option>Otomalj</option> 
                        <option>Troglav</option> 
                        <option>Visocica</option>
                    </select>          
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success select-button">Go</button>
                </div>    
            </form>   
        </div>
       

</body>
  @include('layouts.scripts')
</html>

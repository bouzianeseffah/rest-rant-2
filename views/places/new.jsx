const React = require('react')
const Def = require('../default')

function new_form(){
    return(
        <Def>
            <main>
                <h1>
                    add new places
                </h1>
                <form method='POST' action="/places">
                    <div className='form-group'>
                        <label For='founded'>Founded Year</label>
                        <input className='form-control' id='founded' name='founded' />
                    </div>
                    <div className='form-group'>
                        <label For='name'>Place Name</label>
                        <input className='form-control' id='name' name='name' />
                    </div>
                    <div className='form-group'>
                        <label For="pic">Place Picture</label>
                        <input className='form-control' type="url" id='pic' name='pic' />
                    </div>
                    <div className='form-group'>
                        <label For='city'>City</label>
                        <input className='form-control' id='city' name='city'/>
                    </div>
                    <div className='form-group'>
                        <label For='state'>State</label>
                        <input className='form-control' id='state' name='state'/>
                    </div>
                    <div className='form-group'>
                        <label For='cuisine'>Cuisine</label>
                        <input className='form-control' id='cuisine' name='cuisine' />
                    </div>
                    <input className='btn btn-primary' type="submit" value='Add Place' />
                    
                </form>
            </main>
        </Def>
    )
}
module.exports = new_form
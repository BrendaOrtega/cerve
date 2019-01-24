import React, { Component } from 'react';
import './Home.css';

class History extends Component {

    render() {
        return (
            <div className="history">
                <div className="flex">
                    <div className="header-2">
                        <div>
                            <h2>Cervecería Allende</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis culpa hic incidunt ipsa porro possimus quis quo suscipit. Autem est iusto modi quaerat. Ad aperiam at dolor facere rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem commodi corporis, distinctio, dolorum excepturi ipsum laboriosam modi neque obcaecati ut velit. Alias deserunt optio quae quisquam recusandae rem repellendus!      </p>
                        </div>
                    </div>
                    <div className="history-photo">
                        <div className="header-img">
                            <img className="cer" src="https://images.pexels.com/photos/8859/drink-beer.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="flex">
                    <div className="header">
                        <h2>San Miguel de Allende</h2>  <hr/>
                    </div>
                    <div className="text">
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis culpa hic incidunt ipsa porro possimus quis quo suscipit. Autem est iusto modi quaerat. Ad aperiam at dolor facere rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem commodi corporis, distinctio, dolorum excepturi ipsum laboriosam modi neque obcaecati ut velit. Alias deserunt optio quae quisquam recusandae rem repellendus!      </p>
                        <div className="fl">
                            <p style={{padding:"0 20px 0 0"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum expedita explicabo labore molestias mollitia nisi perferendis similique! Consequatur doloribus est eveniet ex fuga </p>
                            <p style={{padding:"0 0px 0 20px"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum expedita explicabo labore molestias mollitia nisi perferendis similique! Consequatur doloribus est eveniet ex fuga iusto  </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default History;
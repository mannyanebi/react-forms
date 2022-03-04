import React, {Component} from 'react';
import ShoppingListForm from './ShoppingListForm';

class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {name:"FreshYo", qty:"5 Bottles"},
                {name:"Minimie Chin-Chin", qty:"2 Packs"}
            ]
        }; 
        this.addItem = this.addItem.bind(this);
    }
    
    addItem(item){
        this.setState(state => ({
            items: [...state.items, item]
        }))
    }

    renderItems(){
        return(
            <ul>
                {this.state.items.map((item, idx) => (
                    <li key={idx}>
                        {item.name}: {item.qty}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                
                {/* <ul>
                    <li>{this.state.items[0].name}: {this.state.items[0].qty}</li>
                </ul> */}

                <ShoppingListForm addItem={this.addItem}/>
            </div>

        );
    }
}

export default ShoppingList;
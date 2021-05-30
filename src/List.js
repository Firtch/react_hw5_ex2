import React from "react";

class List extends React.PureComponent {
  items = [
    {
      id: 1,
      value: "Item 1",
      isCross: false
    },
    {
      id: 2,
      value: "Item 2",
      isCross: false
    },
    {
      id: 3,
      value: "Item 3",
      isCross: false
    },
    {
      id: 4,
      value: "Item 4",
      isCross: false
    },
    {
      id: 5,
      value: "Item 5",
      isCross: false
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      list: this.items.sort((el1, el2) => el2.id - el1.id),
      lastId: this.items.length,      
    };
  }

  handlerAddNewItem = () => {
    if (this.state.input.value?.trim() !== "") {
      const list = this.state.list;
      const newId = this.state.lastId + 1;
      const newValue = this.state.input.value;
      list.push({ id: newId, value: newValue });
      list.sort((el1, el2) => el2.id - el1.id);
      this.setState({ list, lastId: newId });
    }
  };

  handlerDeleteLastItem = () => {
    const list = this.state.list;
      const newId = this.state.lastId + 1;
      const newValue = this.state.input.value;
      list.pop();

      list.sort((el1, el2) => el2.id - el1.id);
      this.setState({ list, lastId: newId });
  };

  doCrossOutItem = (el) => {
    const { list } = this.state;        
    const found = list.filter((el1) => el1 === el)    
    if(found.length > 0) {
      found[0].isCross = true;      
      this.setState({list});      
    }    
  }

  componentDidMount() {
    this.setState({ input: document.getElementById("inputField") });    
  }

  static DerivedStateFromProps() {
    console.log(this.state.list)  
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.list === nextState.list
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <input id="inputField" type="text" />
        <button onClick={this.handlerAddNewItem}>Добавить</button>
        <button onClick={this.handlerDeleteLastItem}>Удалить</button>
        <ul>
          {list.map((el) => (
            <li className={el.isCross ? "cross-out" : "" } key={el.id}>{el.value} <button onClick={() => this.doCrossOutItem(el)}>Зачеркнуть</button></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;

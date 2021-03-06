import React, {useState, memo, useEffect, useCallback} from "react";
import {getUser} from "@/store/actions/userActions";
import {connect} from "react-redux";


const Child = memo(props => {
    const {list, setList} = props;

    //删除某项
    function deleteItem(index) {
        let newList = list.filter((item, key) => {
            return key !== index;
        });
        setList([...newList]);
    }

    //循环列表
    const listItem = list.map((item, index) => {
        return (
            <li
                key={index}
                style={{
                    border: "1px solid #333",
                    margin: "20px 0",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <span>{index + 1}.</span>
                <span>{item}</span>
                <button onClick={() => deleteItem(index)}>删除-</button>
            </li>
        );
    });
    return (
        <div
            style={{border: "1px solid #777", padding: "20px", margin: "20px 0"}}
        >
            <h1>Child(子组件)</h1>
            <ul>{listItem}</ul>
        </div>
    );
});

//主组件
function Demo(props) {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const ChildCallBack = useCallback(Child, [list, setList]);
    const {getUserInfo} = props;
    //
    useEffect(() => {
        getUserInfo({id: 1});
    }, [getUserInfo]);

    //方法
    function addItem() {
        setList([...list, input]);
    }

    //jxs
    return (
        <div
            style={{border: "1px solid #111", padding: "20px", margin: "20px 0"}}
        >
            <h1>MyDemo(父组件)</h1>
            <br/>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={addItem}>添加事项+</button>
            <ChildCallBack list={list} setList={setList}/>
        </div>
    );
}

//store映射给props
function mapStateToProps({UserReducer}) {
    return {
        userInfo: UserReducer.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserInfo: params => dispatch(getUser(params))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Demo);

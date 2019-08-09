import React, {
    useState,
    forwardRef,
    useRef,
    useImperativeHandle
} from "react";
import {Button, Input} from "antd";
import {addNum, increment} from "@/store/actions/testActions";
import {connect} from "react-redux";

//子组件
function ChildComp(props, ref) {
    const {list, deleteItem}= props;

    function HaHa() {
        console.log("哈哈,我是子组件内的方法");
    }

    useImperativeHandle(ref, () => ({
        HaHa
    }));
    return (
        <>
            <h1>子组件</h1>
            <br/>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li
                                key={index}
                                style={{
                                    width: 600,
                                    height: 40,
                                    border: "1px solid #333",
                                    margin: "20px 0",
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center"
                                }}
                            >
                                <span>{index + 1}.</span>
                                <span>{item}</span>
                                <Button type="danger" onClick={() => deleteItem(index)}>删除</Button>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}

let Child = forwardRef(ChildComp);

//父组件
function Home(props, ref) {
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    const my_ref = useRef(null);
    //删除某项
    function deleteItem(index) {
        let newList = list.filter((item, key) => {
            return key !== index;
        });
        setList([...newList]);
    }
    function addItem() {
        setList([...list, msg]);
    }
    function handleChange(e) {
        setMsg(e.target.value);
    }
    return (
        <div style={{backgroundColor: "#eee"}}>
            <h1>Home页面</h1>
            <br/>
            <Input
                style={{width: 500}}
                onChange={e => handleChange(e)}
                type="text"
            />
            <Button type="primary" onClick={addItem}>
                新增
            </Button>
            <br/>
            <Child ref={my_ref} deleteItem={deleteItem} list={list}/>
        </div>
    );
}

//store映射给props
function mapStateToProps({CountReducer, NumberReducer}) {
    return {
        count: CountReducer.count,
        num: NumberReducer.num
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(increment),
        addNum: () => dispatch(addNum(3))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

/**
 * @fileoverview getDerivedStateFromError 和 componentDidCatch 被称为 Error Boundaries。 可以捕获到子组件中出现的异常
 * componentDidCatch 能够进行有副作用的操作，而 getDerivedStateFromError 不能
 * 不能捕获的异常：
 * 1. 事件处理中的异常
 * 2. 异步代码中的异常（如 setTimeout 或 requestAnimationFrame 回调）
 * 3. 服务端渲染
 * 4. 自身出现的异常
 */

import { Link, Redirect } from "@reach/router";
import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    reDirect: false,
  };

  static getDerivedStateFromError() {
    // 返回的值会更新 state，触发重绘
    // 这里不能做有任何副作用的操作，此时就需要 componentDidCatch 了
    return {
      hasError: true,
    };
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ reDirect: true }), 5000);
    }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.log("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.reDirect) {
      return <Redirect to="/" noThrow />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

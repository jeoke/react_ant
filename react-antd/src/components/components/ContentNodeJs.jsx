import React from 'react';
import { Row , Col , Card } from 'antd';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
class ContentNodeJs extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
       <BreacdcrumbCustom first='NodeJS'/>
          <Row style={{marginBottom:'10px'}}>
            <Col span={6} offset={1}>
                <Card title='NodeJS入门' extra={<a href="#">More</a>} style={{ width: 280}}>
                    node.js是什么?<br/>
                    node.js的使用<br/>
                    http协议的内容<br/>
                    二次请求<br/>
                    阻塞和非阻塞<br/>
                    创建服务<br/>
                    路由管理<br/>
                    文件系统和shell命令<br/>
                    node模块组织<br/>
                    浏览器如何与http服务交互<br/>
                    REST API<br/>
                    基本认证<br/>
                    内存存储和文件存储<br/>
                </Card>
            </Col>
            <Col span={6} offset={2}>
                <Card title='Node附带' extra={<a href="#">More</a>} style={{ width: 280}}>
                     node的理念<br/>
                     EvemtEmitter的应用<br/>
                     http详解<br/>
                     中间件是什么?<br/>
                     npm包<br/>
                     数学函数运算<br/>
                     照片文件上传下载的处理<br/>
                     node的效率<br/>
                     node爬虫<br/>
                     数据库的使用<br/>
                     模板引擎<br/>
                     net模块<br/>
                     与操作系统交互<br/>
                     vps与云主机<br/>
                     clusterAPI多进程处理<br/>
                     nginx静态文件代理<br/>
                </Card>
            </Col>
            <Col span={6} offset={2}>
                <Card title='Node扩展' extra={<a href="#">More</a>} style={{ width: 280}}>
                     node内存控制<br/>
                     前后端职能分离<br/>
                     函数式编程<br/>
                     异步编程<br/>
                     深入理解Buffer<br/>
                     服务模型的变迁<br/>
                     集群稳定<br/>
                     数据库设计<br/>
                     测试<br/>
                     npm高阶应用<br/>
                     服务器安全<br/>
                     C/C++扩展<br/>
                     框架的应用<br/>
                     按需使用，随心所欲<br/>
                     优化，算法研究<br/>
                     服务器架构<br/>
                     业务管理<br/>
                     继续作<br/>
                </Card>
            </Col>
          </Row>
        </div>
    );
  }
}

export default ContentNodeJs;

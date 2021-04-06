/**
 * @file mock index module
 * @author raulxiao
 */

// import moment from 'moment'
// import faker from 'faker'
// import chalk from 'chalk'
import { sleep } from './util'

export async function response (getArgs, postArgs, req) {
    const invoke = getArgs.invoke
    if (invoke === 'statistics') {
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': [{
                'bk_obj_id': 'host',
                'instance_count': 3108
            }, {
                'bk_obj_id': 'set',
                'instance_count': 373
            }, {
                'bk_obj_id': 'module',
                'instance_count': 786
            }, {
                'bk_obj_id': 'biz',
                'instance_count': 179
            }]
        }
    } else if (invoke === 'classificationobject') {
        const delay = getArgs.delay
        await sleep(delay)
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': [{
                'id': 1,
                'bk_classification_id': 'bk_host_manage',
                'bk_classification_name': '主机管理',
                'bk_classification_type': 'inner',
                'bk_classification_icon': 'icon-cc-host',
                'bk_supplier_account': '0',
                'bk_objects': [{
                    'id': 1,
                    'bk_classification_id': 'bk_host_manage',
                    'bk_obj_icon': 'icon-cc-host',
                    'bk_obj_id': 'host',
                    'bk_obj_name': '主机',
                    'bk_ishidden': false,
                    'ispre': true,
                    'bk_ispaused': false,
                    'position': '{"bk_host_manage":{"x":-600,"y":-650}}',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }, {
                    'id': 5,
                    'bk_classification_id': 'bk_host_manage',
                    'bk_obj_icon': 'icon-cc-process',
                    'bk_obj_id': 'process',
                    'bk_obj_name': '进程',
                    'bk_ishidden': true,
                    'ispre': true,
                    'bk_ispaused': false,
                    'position': '{"bk_host_manage":{"x":-450,"y":-650}}',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }, {
                    'id': 6,
                    'bk_classification_id': 'bk_host_manage',
                    'bk_obj_icon': 'icon-cc-subnet',
                    'bk_obj_id': 'plat',
                    'bk_obj_name': '云区域',
                    'bk_ishidden': true,
                    'ispre': true,
                    'bk_ispaused': false,
                    'position': '{"bk_host_manage":{"x":-600,"y":-500}}',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }]
            }, {
                'id': 2,
                'bk_classification_id': 'bk_biz_topo',
                'bk_classification_name': '业务拓扑',
                'bk_classification_type': 'inner',
                'bk_classification_icon': 'icon-cc-business',
                'bk_supplier_account': '0',
                'bk_objects': [{
                    'id': 2,
                    'bk_classification_id': 'bk_biz_topo',
                    'bk_obj_icon': 'icon-cc-module',
                    'bk_obj_id': 'module',
                    'bk_obj_name': '模块',
                    'bk_ishidden': false,
                    'ispre': true,
                    'bk_ispaused': false,
                    'position': '',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }, {
                    'id': 3,
                    'bk_classification_id': 'bk_biz_topo',
                    'bk_obj_icon': 'icon-cc-set',
                    'bk_obj_id': 'set',
                    'bk_obj_name': '集群',
                    'bk_ishidden': false,
                    'ispre': true,
                    'bk_ispaused': false,
                    'position': '',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }]
            }, {
                'id': 3,
                'bk_classification_id': 'bk_organization',
                'bk_classification_name': '组织架构',
                'bk_classification_type': 'inner',
                'bk_classification_icon': 'icon-cc-organization',
                'bk_supplier_account': '0',
                'bk_objects': [{
                    'id': 4,
                    'bk_classification_id': 'bk_organization',
                    'bk_obj_icon': 'icon-cc-business',
                    'bk_obj_id': 'biz',
                    'bk_obj_name': '业务',
                    'bk_ishidden': false,
                    'ispre': true,
                    'bk_ispaused': false,
                    'position': '{"bk_organization":{"x":-100,"y":-100}}',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }]
            }, {
                'id': 4,
                'bk_classification_id': 'bk_network',
                'bk_classification_name': '网络',
                'bk_classification_type': 'inner',
                'bk_classification_icon': 'icon-cc-network-equipment',
                'bk_supplier_account': '0',
                'bk_objects': [{
                    'id': 7,
                    'bk_classification_id': 'bk_network',
                    'bk_obj_icon': 'icon-cc-switch2',
                    'bk_obj_id': 'bk_switch',
                    'bk_obj_name': '交换机',
                    'bk_ishidden': false,
                    'ispre': false,
                    'bk_ispaused': false,
                    'position': '{"bk_network":{"x":-200,"y":-50}}',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }, {
                    'id': 8,
                    'bk_classification_id': 'bk_network',
                    'bk_obj_icon': 'icon-cc-router',
                    'bk_obj_id': 'bk_router',
                    'bk_obj_name': '路由器',
                    'bk_ishidden': false,
                    'ispre': false,
                    'bk_ispaused': false,
                    'position': '{"bk_network":{"x":-350,"y":-50}}',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }, {
                    'id': 9,
                    'bk_classification_id': 'bk_network',
                    'bk_obj_icon': 'icon-cc-balance',
                    'bk_obj_id': 'bk_load_balance',
                    'bk_obj_name': '负载均衡',
                    'bk_ishidden': false,
                    'ispre': false,
                    'bk_ispaused': false,
                    'position': '{"bk_network":{"x":-500,"y":-50}}',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }, {
                    'id': 10,
                    'bk_classification_id': 'bk_network',
                    'bk_obj_icon': 'icon-cc-firewall',
                    'bk_obj_id': 'bk_firewall',
                    'bk_obj_name': '防火墙',
                    'bk_ishidden': false,
                    'ispre': false,
                    'bk_ispaused': false,
                    'position': '{"bk_network":{"x":-650,"y":-50}}',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': 'cc_system',
                    'modifier': '',
                    'create_time': '0001-01-01 00:00:00',
                    'last_time': '0001-01-01 00:00:00'
                }]
            }, {
                'id': 6,
                'bk_classification_id': 'business_department',
                'bk_classification_name': '营业部',
                'bk_classification_type': '',
                'bk_classification_icon': '',
                'bk_supplier_account': '0',
                'bk_objects': [{
                    'id': 13,
                    'bk_classification_id': 'business_department',
                    'bk_obj_icon': 'icon-cc-default',
                    'bk_obj_id': 'secondary_computer_staff',
                    'bk_obj_name': '二级部电脑岗位人员台账',
                    'bk_ishidden': false,
                    'ispre': false,
                    'bk_ispaused': false,
                    'position': '',
                    'bk_supplier_account': '0',
                    'description': '',
                    'creator': '',
                    'modifier': '',
                    'create_time': '2021-03-16 09:09:03',
                    'last_time': '2021-03-16 09:09:03'
                }]
            }]
        }
    } else if (invoke === 'objectattr') {
        const delay = postArgs.delay
        await sleep(delay)
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': [{
                'bk_biz_id': 0,
                'id': 173,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'biz_status',
                'bk_property_name': '系统状态',
                'bk_property_group': 'default',
                'bk_property_index': 9,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'singlechar',
                'option': '',
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:03',
                'last_time': '2021-03-10 08:53:03',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 171,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'biz_type',
                'bk_property_name': '系统类型',
                'bk_property_group': 'default',
                'bk_property_index': 7,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'singlechar',
                'option': '',
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:02',
                'last_time': '2021-03-10 08:53:02',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 6,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'bk_biz_developer',
                'bk_property_name': '开发人员',
                'bk_property_group': 'role',
                'bk_property_index': 3,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': true,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'objuser',
                'option': '',
                'description': '',
                'creator': 'cc_system',
                'create_time': '2021-03-09 17:49:21',
                'last_time': '2021-03-09 17:49:21',
                'bk_property_group_name': '角色'
            }, {
                'bk_biz_id': 0,
                'id': 3,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'bk_biz_maintainer',
                'bk_property_name': '运维人员',
                'bk_property_group': 'role',
                'bk_property_index': 0,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': true,
                'isrequired': true,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'objuser',
                'option': '',
                'description': '',
                'creator': 'cc_system',
                'create_time': '2021-03-09 17:49:21',
                'last_time': '2021-03-09 17:49:21',
                'bk_property_group_name': '角色'
            }, {
                'bk_biz_id': 0,
                'id': 1,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'bk_biz_name',
                'bk_property_name': '业务名',
                'bk_property_group': 'default',
                'bk_property_index': 0,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': true,
                'isrequired': true,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'singlechar',
                'option': '',
                'description': '',
                'creator': 'cc_system',
                'create_time': '2021-03-09 17:49:21',
                'last_time': '2021-03-09 17:49:21',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 4,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'bk_biz_productor',
                'bk_property_name': '产品人员',
                'bk_property_group': 'role',
                'bk_property_index': 1,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': true,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'objuser',
                'option': '',
                'description': '',
                'creator': 'cc_system',
                'create_time': '2021-03-09 17:49:21',
                'last_time': '2021-03-09 17:49:21',
                'bk_property_group_name': '角色'
            }, {
                'bk_biz_id': 0,
                'id': 5,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'bk_biz_tester',
                'bk_property_name': '测试人员',
                'bk_property_group': 'role',
                'bk_property_index': 2,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': true,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'objuser',
                'option': '',
                'description': '',
                'creator': 'cc_system',
                'create_time': '2021-03-09 17:49:21',
                'last_time': '2021-03-09 17:49:21',
                'bk_property_group_name': '角色'
            }, {
                'bk_biz_id': 0,
                'id': 169,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'dept_name',
                'bk_property_name': '所属部门',
                'bk_property_group': 'default',
                'bk_property_index': 5,
                'unit': '',
                'placeholder': '请填写系统所属部门',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'longchar',
                'option': '',
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:02',
                'last_time': '2021-03-10 08:53:02',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 176,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'develop_company',
                'bk_property_name': '开发公司',
                'bk_property_group': 'default',
                'bk_property_index': 12,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'singlechar',
                'option': '',
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:03',
                'last_time': '2021-03-10 08:53:03',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 174,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'develop_style',
                'bk_property_name': '开发方式',
                'bk_property_group': 'default',
                'bk_property_index': 10,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'singlechar',
                'option': '',
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:03',
                'last_time': '2021-03-10 08:53:03',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 170,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'group_name',
                'bk_property_name': '所属小组',
                'bk_property_group': 'default',
                'bk_property_index': 6,
                'unit': '',
                'placeholder': '请填写系统所属小组',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'longchar',
                'option': '',
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:02',
                'last_time': '2021-03-10 08:53:02',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 177,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'is_register_associa',
                'bk_property_name': '是否上报协会',
                'bk_property_group': 'default',
                'bk_property_index': 13,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'enum',
                'option': [{
                    'id': 'no',
                    'is_default': true,
                    'name': '否',
                    'type': 'text'
                }, {
                    'id': 'yes',
                    'is_default': false,
                    'name': '是',
                    'type': 'text'
                }],
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:03',
                'last_time': '2021-03-10 08:53:03',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 9,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'language',
                'bk_property_name': '语言',
                'bk_property_group': 'default',
                'bk_property_index': 3,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': true,
                'isrequired': true,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'enum',
                'option': [{
                    'id': '1',
                    'is_default': true,
                    'name': '中文',
                    'type': 'text'
                }, {
                    'id': '2',
                    'is_default': false,
                    'name': 'English',
                    'type': 'text'
                }],
                'description': '',
                'creator': 'cc_system',
                'create_time': '2021-03-09 17:49:21',
                'last_time': '2021-03-09 17:49:21',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 172,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'level',
                'bk_property_name': '重要等级',
                'bk_property_group': 'default',
                'bk_property_index': 8,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'enum',
                'option': [{
                    'id': 'ITP1',
                    'is_default': true,
                    'name': 'ITP1',
                    'type': 'text'
                }, {
                    'id': 'ITP2',
                    'is_default': false,
                    'name': 'ITP2',
                    'type': 'text'
                }, {
                    'id': 'ITP3',
                    'is_default': false,
                    'name': 'ITP3',
                    'type': 'text'
                }, {
                    'id': 'ITP4',
                    'is_default': false,
                    'name': 'ITP4',
                    'type': 'text'
                }],
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:02',
                'last_time': '2021-03-10 08:53:02',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 2,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'life_cycle',
                'bk_property_name': '生命周期',
                'bk_property_group': 'default',
                'bk_property_index': 1,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': true,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'enum',
                'option': [{
                    'id': '1',
                    'is_default': false,
                    'name': '测试中',
                    'type': 'text'
                }, {
                    'id': '2',
                    'is_default': true,
                    'name': '已上线',
                    'type': 'text'
                }, {
                    'id': '3',
                    'is_default': false,
                    'name': '停运',
                    'type': 'text'
                }],
                'description': '',
                'creator': 'cc_system',
                'create_time': '2021-03-09 17:49:21',
                'last_time': '2021-03-09 17:49:21',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 7,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'operator',
                'bk_property_name': '操作人员',
                'bk_property_group': 'role',
                'bk_property_index': 4,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': true,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'objuser',
                'option': '',
                'description': '',
                'creator': 'cc_system',
                'create_time': '2021-03-09 17:49:21',
                'last_time': '2021-03-09 17:49:21',
                'bk_property_group_name': '角色'
            }, {
                'bk_biz_id': 0,
                'id': 178,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'remark',
                'bk_property_name': '备注',
                'bk_property_group': 'default',
                'bk_property_index': 14,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'longchar',
                'option': '',
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:03',
                'last_time': '2021-03-10 08:53:03',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 8,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'time_zone',
                'bk_property_name': '时区',
                'bk_property_group': 'default',
                'bk_property_index': 2,
                'unit': '',
                'placeholder': '',
                'editable': false,
                'ispre': true,
                'isrequired': true,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'timezone',
                'option': '',
                'description': '',
                'creator': 'cc_system',
                'create_time': '2021-03-09 17:49:21',
                'last_time': '2021-03-09 17:49:21',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 175,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'use_dept',
                'bk_property_name': '使用部门',
                'bk_property_group': 'default',
                'bk_property_index': 11,
                'unit': '',
                'placeholder': '',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'singlechar',
                'option': '',
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:03',
                'last_time': '2021-03-10 08:53:03',
                'bk_property_group_name': 'Default'
            }, {
                'bk_biz_id': 0,
                'id': 168,
                'bk_supplier_account': '0',
                'bk_obj_id': 'biz',
                'bk_property_id': 'wk_biz_id',
                'bk_property_name': '悟空系统ID',
                'bk_property_group': 'default',
                'bk_property_index': 4,
                'unit': '',
                'placeholder': '请填写系统所属的悟空系统ID',
                'editable': true,
                'ispre': false,
                'isrequired': false,
                'isreadonly': false,
                'isonly': false,
                'bk_issystem': false,
                'bk_isapi': false,
                'bk_property_type': 'singlechar',
                'option': '',
                'description': '',
                'creator': 'admin',
                'create_time': '2021-03-10 08:53:02',
                'last_time': '2021-03-10 08:53:02',
                'bk_property_group_name': 'Default'
            }]
        }
    } else if (invoke === 'biz') {
        const delay = getArgs.delay
        await sleep(delay)
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': [{
                'bk_biz_id': 0,
                'id': 1,
                'bk_group_id': 'default',
                'bk_group_name': '基础信息',
                'bk_group_index': 1,
                'bk_obj_id': 'biz',
                'bk_supplier_account': '0',
                'bk_isdefault': true,
                'ispre': false,
                'is_collapse': false
            }, {
                'bk_biz_id': 0,
                'id': 2,
                'bk_group_id': 'role',
                'bk_group_name': '角色',
                'bk_group_index': 2,
                'bk_obj_id': 'biz',
                'bk_supplier_account': '0',
                'bk_isdefault': true,
                'ispre': false,
                'is_collapse': false
            }]
        }
    } else if (invoke === 'topomodelmainline') {
        const delay = getArgs.delay
        await sleep(delay)
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': [{
                'bk_obj_id': 'biz',
                'bk_obj_name': '业务',
                'bk_supplier_account': '0',
                'bk_next_obj': 'set',
                'bk_next_name': '集群',
                'bk_pre_obj_id': '',
                'bk_pre_obj_name': ''
            }, {
                'bk_obj_id': 'set',
                'bk_obj_name': '集群',
                'bk_supplier_account': '0',
                'bk_next_obj': 'module',
                'bk_next_name': '模块',
                'bk_pre_obj_id': 'biz',
                'bk_pre_obj_name': '业务'
            }, {
                'bk_obj_id': 'module',
                'bk_obj_name': '模块',
                'bk_supplier_account': '0',
                'bk_next_obj': 'host',
                'bk_next_name': '主机',
                'bk_pre_obj_id': 'set',
                'bk_pre_obj_name': '集群'
            }, {
                'bk_obj_id': 'host',
                'bk_obj_name': '主机',
                'bk_supplier_account': '0',
                'bk_next_obj': '',
                'bk_next_name': '',
                'bk_pre_obj_id': 'module',
                'bk_pre_obj_name': '模块'
            }]
        }
    } else if (invoke === 'associationtype') {
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': {
                'count': 6,
                'info': [{
                    'id': 1,
                    'bk_asst_id': 'belong',
                    'bk_asst_name': '属于',
                    'bk_supplier_account': '0',
                    'src_des': '属于',
                    'dest_des': '包含',
                    'direction': 'src_to_dest',
                    'ispre': true
                }, {
                    'id': 2,
                    'bk_asst_id': 'group',
                    'bk_asst_name': '组成',
                    'bk_supplier_account': '0',
                    'src_des': '组成',
                    'dest_des': '组成于',
                    'direction': 'src_to_dest',
                    'ispre': true
                }, {
                    'id': 3,
                    'bk_asst_id': 'bk_mainline',
                    'bk_asst_name': '拓扑组成',
                    'bk_supplier_account': '0',
                    'src_des': '组成',
                    'dest_des': '组成于',
                    'direction': 'src_to_dest',
                    'ispre': true
                }, {
                    'id': 4,
                    'bk_asst_id': 'run',
                    'bk_asst_name': '运行',
                    'bk_supplier_account': '0',
                    'src_des': '运行于',
                    'dest_des': '运行',
                    'direction': 'src_to_dest',
                    'ispre': true
                }, {
                    'id': 5,
                    'bk_asst_id': 'connect',
                    'bk_asst_name': '上联',
                    'bk_supplier_account': '0',
                    'src_des': '上联',
                    'dest_des': '下联',
                    'direction': 'src_to_dest',
                    'ispre': true
                }, {
                    'id': 6,
                    'bk_asst_id': 'default',
                    'bk_asst_name': '默认关联',
                    'bk_supplier_account': '0',
                    'src_des': '关联',
                    'dest_des': '关联',
                    'direction': 'src_to_dest',
                    'ispre': true
                }]
            }
        }
    } else if (invoke === 'topomodelmainline') {
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': [{
                'bk_obj_id': 'biz',
                'bk_obj_name': '业务',
                'bk_supplier_account': '0',
                'bk_next_obj': 'set',
                'bk_next_name': '集群',
                'bk_pre_obj_id': '',
                'bk_pre_obj_name': ''
            }, {
                'bk_obj_id': 'set',
                'bk_obj_name': '集群',
                'bk_supplier_account': '0',
                'bk_next_obj': 'module',
                'bk_next_name': '模块',
                'bk_pre_obj_id': 'biz',
                'bk_pre_obj_name': '业务'
            }, {
                'bk_obj_id': 'module',
                'bk_obj_name': '模块',
                'bk_supplier_account': '0',
                'bk_next_obj': 'host',
                'bk_next_name': '主机',
                'bk_pre_obj_id': 'set',
                'bk_pre_obj_name': '集群'
            }, {
                'bk_obj_id': 'host',
                'bk_obj_name': '主机',
                'bk_supplier_account': '0',
                'bk_next_obj': '',
                'bk_next_name': '',
                'bk_pre_obj_id': 'module',
                'bk_pre_obj_name': '模块'
            }]
        }
    } else if (invoke === 'scope_id/0') {
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': [{
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'host',
                'ispre': true,
                'bk_inst_id': 0,
                'node_name': '主机',
                'position': {
                    'x': null,
                    'y': null
                },
                'bk_obj_icon': 'icon-cc-host',
                'bk_supplier_account': '0',
                'assts': [{
                    'bk_asst_type': '',
                    'node_type': 'obj',
                    'bk_obj_id': 'module',
                    'bk_inst_id': 3,
                    'bk_asst_inst_id': 3,
                    'bk_asst_name': '',
                    'label': {}
                }]
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'module',
                'ispre': true,
                'bk_inst_id': 0,
                'node_name': '模块',
                'position': {
                    'x': null,
                    'y': null
                },
                'bk_obj_icon': 'icon-cc-module',
                'bk_supplier_account': '0',
                'assts': [{
                    'bk_asst_type': '',
                    'node_type': 'obj',
                    'bk_obj_id': 'set',
                    'bk_inst_id': 2,
                    'bk_asst_inst_id': 3,
                    'bk_asst_name': '',
                    'label': {}
                }]
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'set',
                'ispre': true,
                'bk_inst_id': 0,
                'node_name': '集群',
                'position': {
                    'x': null,
                    'y': null
                },
                'bk_obj_icon': 'icon-cc-set',
                'bk_supplier_account': '0',
                'assts': [{
                    'bk_asst_type': '',
                    'node_type': 'obj',
                    'bk_obj_id': 'biz',
                    'bk_inst_id': 1,
                    'bk_asst_inst_id': 3,
                    'bk_asst_name': '',
                    'label': {}
                }]
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'biz',
                'ispre': true,
                'bk_inst_id': 0,
                'node_name': '业务',
                'position': {
                    'x': null,
                    'y': null
                },
                'bk_obj_icon': 'icon-cc-business',
                'bk_supplier_account': '0'
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'process',
                'ispre': true,
                'bk_inst_id': 0,
                'node_name': '进程',
                'position': {
                    'x': null,
                    'y': null
                },
                'bk_obj_icon': 'icon-cc-process',
                'bk_supplier_account': '0'
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'plat',
                'ispre': true,
                'bk_inst_id': 0,
                'node_name': '云区域',
                'position': {
                    'x': null,
                    'y': null
                },
                'bk_obj_icon': 'icon-cc-subnet',
                'bk_supplier_account': '0'
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'bk_switch',
                'ispre': false,
                'bk_inst_id': 0,
                'node_name': '交换机',
                'position': {
                    'x': 680,
                    'y': -187
                },
                'bk_obj_icon': 'icon-cc-switch2',
                'bk_supplier_account': '0',
                'assts': [{
                    'bk_asst_type': '',
                    'node_type': 'obj',
                    'bk_obj_id': 'host',
                    'bk_inst_id': 5,
                    'bk_asst_inst_id': 5,
                    'bk_asst_name': '',
                    'label': {}
                }]
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'bk_router',
                'ispre': false,
                'bk_inst_id': 0,
                'node_name': '路由器',
                'position': {
                    'x': null,
                    'y': null
                },
                'bk_obj_icon': 'icon-cc-router',
                'bk_supplier_account': '0'
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'bk_load_balance',
                'ispre': false,
                'bk_inst_id': 0,
                'node_name': '负载均衡',
                'position': {
                    'x': null,
                    'y': null
                },
                'bk_obj_icon': 'icon-cc-balance',
                'bk_supplier_account': '0'
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'bk_firewall',
                'ispre': false,
                'bk_inst_id': 0,
                'node_name': '防火墙',
                'position': {
                    'x': null,
                    'y': null
                },
                'bk_obj_icon': 'icon-cc-firewall',
                'bk_supplier_account': '0'
            }, {
                'scope_type': 'global',
                'scope_id': '0',
                'node_type': 'obj',
                'bk_obj_id': 'secondary_computer_staff',
                'ispre': false,
                'bk_inst_id': 0,
                'node_name': '二级部电脑岗位人员台账',
                'position': {
                    'x': 822,
                    'y': -40
                },
                'bk_obj_icon': 'icon-cc-default',
                'bk_supplier_account': '0'
            }]
        }
    } else if (invoke === 'usercustom') {
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': null
        }
    } else if (invoke === 'search') {
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': {
                'biz_custom_table_columns': ['bk_biz_id', 'bk_biz_name', 'wk_biz_id', 'dept_name', 'group_name', 'bk_biz_maintainer', 'bk_biz_productor', 'level', 'remark', 'biz_status'],
                'bk_supplier_account': '0',
                'bk_user': 'admin',
                'business_topology_table_column_config': ['bk_host_id', 'bk_host_innerip', 'bk_cloud_id', 'bk_set_name', 'bk_module_name', 'bk_os_type', 'operator', 'bk_host_name'],
                'id': 'c1410mvn68md5f19kj50',
                'menu_resource_business_collection': true,
                'menu_resource_collection': [],
                'model_custom_hide_models': {
                    'hideGroupIds': [],
                    'hideNodeIds': []
                },
                'recently_models': [7, 13, 12, 11, 10],
                'resource_host_common_filter': [
                    ['bk_set_name', 'set'],
                    ['bk_module_name', 'module'],
                    ['operator', 'host'],
                    ['bk_bak_operator', 'host'],
                    ['bk_cloud_id', 'host'],
                    ['__bk_host_topology__', 'host'],
                    ['app_name', 'host']
                ]
            }
        }
    } else if (invoke === 'model') {
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': {}
        }
    } else if (invoke === 'topoassociationtype') {
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': {
                'associations': [{
                    'bk_asst_id': 'belong',
                    'assts': []
                }, {
                    'bk_asst_id': 'group',
                    'assts': []
                }, {
                    'bk_asst_id': 'bk_mainline',
                    'assts': [{
                        'id': 1,
                        'bk_supplier_account': '0',
                        'bk_obj_asst_id': 'set_bk_mainline_biz',
                        'bk_obj_asst_name': '',
                        'bk_obj_id': 'set',
                        'bk_asst_obj_id': 'biz',
                        'bk_asst_id': 'bk_mainline',
                        'mapping': '1:1',
                        'on_delete': 'none',
                        'ispre': true
                    }, {
                        'id': 2,
                        'bk_supplier_account': '0',
                        'bk_obj_asst_id': 'module_bk_mainline_set',
                        'bk_obj_asst_name': '',
                        'bk_obj_id': 'module',
                        'bk_asst_obj_id': 'set',
                        'bk_asst_id': 'bk_mainline',
                        'mapping': '1:1',
                        'on_delete': 'none',
                        'ispre': true
                    }, {
                        'id': 3,
                        'bk_supplier_account': '0',
                        'bk_obj_asst_id': 'host_bk_mainline_module',
                        'bk_obj_asst_name': '',
                        'bk_obj_id': 'host',
                        'bk_asst_obj_id': 'module',
                        'bk_asst_id': 'bk_mainline',
                        'mapping': '1:1',
                        'on_delete': 'none',
                        'ispre': true
                    }]
                }, {
                    'bk_asst_id': 'run',
                    'assts': []
                }, {
                    'bk_asst_id': 'connect',
                    'assts': [{
                        'id': 5,
                        'bk_supplier_account': '0',
                        'bk_obj_asst_id': 'bk_switch_connect_host',
                        'bk_obj_asst_name': '',
                        'bk_obj_id': 'bk_switch',
                        'bk_asst_obj_id': 'host',
                        'bk_asst_id': 'connect',
                        'mapping': '1:n',
                        'on_delete': 'none',
                        'ispre': false
                    }]
                }, {
                    'bk_asst_id': 'default',
                    'assts': []
                }]
            }
        }
    } else if (invoke === 'with_reduced') {
        return {
            'result': true,
            'bk_error_code': 0,
            'bk_error_msg': 'success',
            'permission': null,
            'data': {
                'count': 1,
                'info': [{
                    'bk_biz_id': 2,
                    'bk_biz_name': '蓝鲸'
                }]
            }
        }
    }
    return {
        'result': true,
        'bk_error_code': 0,
        'bk_error_msg': 'success',
        'permission': null,
        'data': {}
    }
}

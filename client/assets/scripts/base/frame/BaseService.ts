/*
 * @Author: zsl
 * @Date: 2022-05-25 11:41:09
 * @LastEditors: zsl
 * @LastEditTime: 2022-05-25 11:52:25
 * @Description: file content
 */
import * as cc from 'cc';
import { EventDispatcher } from "./EventDispatcher"

const {ccclass} = cc._decorator;

@ccclass("BaseService")
export class BaseService extends EventDispatcher{
    public start () {

    }

    public stop(){

    }
}

BaseService.name

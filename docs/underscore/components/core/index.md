
:::demo 
```html
<template>

    <h3>集合函数 (数组 或对象）</h3>
    <eachCollections></eachCollections>
    <mapCollections></mapCollections>
    <reduceCollections></reduceCollections>
    <reduceRightCollections></reduceRightCollections>
    <findCollections></findCollections>
    <filterCollections></filterCollections>
    <findWhereCollections></findWhereCollections>
    <whereCollections></whereCollections>
    <rejectCollections></rejectCollections>
    <everyCollections></everyCollections>
    <someCollections></someCollections>
    <containsCollections></containsCollections>
    <invokeCollections></invokeCollections>
    <pluckCollections></pluckCollections>
    <maxCollections></maxCollections>
    <minCollections></minCollections>
    <sortByCollections></sortByCollections>
    <groupByCollections></groupByCollections>
    <indexByCollections></indexByCollections>
    <countByCollections></countByCollections>
    <shuffleCollections></shuffleCollections>
    <sampleCollections></sampleCollections>
    <toArrayCollections></toArrayCollections>
    <sizeCollections></sizeCollections>
    <partitionCollections></partitionCollections>
    <compactArray></compactArray>
        
    <h3>数组函数（Array Functions）</h3>
    <firstArray></firstArray>
    <initialArray></initialArray>
    <lastArray></lastArray>
    <restArray></restArray>
    <flattenArray></flattenArray>
    <withoutArray></withoutArray>
    <unionArray></unionArray>
    <intersectionArray></intersectionArray>
    <differenceArray></differenceArray>
    <uniqArray></uniqArray>
    <zipArray></zipArray>
    <unzipArray></unzipArray>
    <objectArray></objectArray>
    <chunkArray></chunkArray>
    <indexOfArray></indexOfArray>
    <lastIndexOfArray></lastIndexOfArray>
    <sortedIndexArray></sortedIndexArray>
    <findIndexArray></findIndexArray>
    <findLastIndexArray></findLastIndexArray>
    <rangeArray></rangeArray>
    
    <h3>与函数有关的函数（Function (uh, ahem) Functions</h3>
    <bindFunctions></bindFunctions>
    <bindAllFunctions></bindAllFunctions>
    <partialFunctions></partialFunctions>
    <memoizeFunctions></memoizeFunctions>
    <delayFunctions></delayFunctions>
    <deferFunctions></deferFunctions>
    <throttleFunctions></throttleFunctions>
    <debounceFunctions></debounceFunctions>
    <onceFunctions></onceFunctions>
    <afterFunctions></afterFunctions>
    <beforeFunctions></beforeFunctions>
    <wrapFunctions></wrapFunctions>
    <negateFunctions></negateFunctions>
    <composeFunctions></composeFunctions>

    <h3>对象函数（Object Functions）</h3>
    <isValueTypeObjects></isValueTypeObjects>
    <keysObjects></keysObjects>
    <allKeysObjects></allKeysObjects>
    <valuesObjects></valuesObjects>
    <mapObjectObjects></mapObjectObjects>
    <pairsObjects></pairsObjects>
    <invertObjects></invertObjects>
    <createObjects></createObjects>
    <functionsObjects></functionsObjects>
    <findKeyObjects></findKeyObjects>
    <extendObjects></extendObjects>
    <extendOwnObjects></extendOwnObjects>
    <pickObjects></pickObjects>
    <omitObjects></omitObjects>
    <defaultsObjects></defaultsObjects>
    <cloneObjects></cloneObjects>
    <tapObjects></tapObjects>
    <hasObjects></hasObjects>
    <propertyObjects></propertyObjects>
    <propertyOfObjects></propertyOfObjects>
    <matcherObjects></matcherObjects>
    <isEqualObjects></isEqualObjects>
    <isMatchObjects></isMatchObjects>

    <h3>实用功能（Utility Functions）</h3>
    <identityUtility></identityUtility>
    <constantUtility></constantUtility>
    <noopUtility></noopUtility>
    <timesUtility></timesUtility>
    <randomUtility></randomUtility>
    <mixinUtility></mixinUtility>
    <iterateeUtility></iterateeUtility>
    <uniqueIdUtility></uniqueIdUtility>
    <escapeUtility></escapeUtility>
    <unescapeUtility></unescapeUtility>
    <resultUtility></resultUtility>
    <nowUtility></nowUtility>
    
    <h3>链式语法（Chaining）</h3>
    <chainChaining></chainChaining>
    <valueChaining></valueChaining>
</template>
<script>

import eachCollections from './collections/eachCollections.md';
import mapCollections from './collections/mapCollections.md';
import reduceCollections from './collections/reduceCollections.md';
import reduceRightCollections from './collections/reduceRightCollections.md';
import findCollections from './collections/findCollections.md';
import filterCollections from './collections/filterCollections.md';
import findWhereCollections from './collections/findWhereCollections.md';
import whereCollections from './collections/whereCollections.md';
import rejectCollections from './collections/rejectCollections.md';
import everyCollections from './collections/everyCollections.md';
import someCollections from './collections/someCollections.md';
import containsCollections from './collections/containsCollections.md';
import invokeCollections from './collections/invokeCollections.md';
import pluckCollections from './collections/pluckCollections.md';
import maxCollections from './collections/maxCollections.md';
import minCollections from './collections/minCollections.md';
import sortByCollections from './collections/sortByCollections.md';
import groupByCollections from './collections/groupByCollections.md';
import indexByCollections from './collections/indexByCollections.md';
import countByCollections from './collections/countByCollections.md';
import shuffleCollections from './collections/shuffleCollections.md';
import sampleCollections from './collections/sampleCollections.md';
import toArrayCollections from './collections/toArrayCollections.md';
import sizeCollections from './collections/sizeCollections.md';
import partitionCollections from './collections/partitionCollections.md';
import compactArray from './array/compactArray.md';

import firstArray from './array/firstArray.md';
import initialArray from './array/initialArray.md';
import lastArray from './array/lastArray.md';
import restArray from './array/restArray.md';
import flattenArray from './array/flattenArray.md';
import withoutArray from './array/withoutArray.md';
import unionArray from './array/unionArray.md';
import intersectionArray from './array/intersectionArray.md';
import differenceArray from './array/differenceArray.md';
import uniqArray from './array/uniqArray.md';
import zipArray from './array/zipArray.md';
import unzipArray from './array/unzipArray.md';
import objectArray from './array/objectArray.md';
import chunkArray from './array/chunkArray.md';
import indexOfArray from './array/indexOfArray.md';
import lastIndexOfArray from './array/lastIndexOfArray.md';
import sortedIndexArray from './array/sortedIndexArray.md';
import findIndexArray from './array/findIndexArray.md';
import findLastIndexArray from './array/findLastIndexArray.md';
import rangeArray from './array/rangeArray.md';

import bindFunctions from './functions/bindFunctions.md';
import bindAllFunctions from './functions/bindAllFunctions.md';
import partialFunctions from './functions/partialFunctions.md';
import memoizeFunctions from './functions/memoizeFunctions.md';
import delayFunctions from './functions/delayFunctions.md';
import deferFunctions from './functions/deferFunctions.md';
import throttleFunctions from './functions/throttleFunctions.md';
import debounceFunctions from './functions/debounceFunctions.md';
import onceFunctions from './functions/onceFunctions.md';
import afterFunctions from './functions/afterFunctions.md';
import beforeFunctions from './functions/beforeFunctions.md';
import wrapFunctions from './functions/wrapFunctions.md';
import negateFunctions from './functions/negateFunctions.md';
import composeFunctions from './functions/composeFunctions.md';

import isValueTypeObjects from './objects/isValueTypeObjects.md';
import keysObjects from './objects/keysObjects.md';
import allKeysObjects from './objects/allKeysObjects.md';
import valuesObjects from './objects/valuesObjects.md';
import mapObjectObjects from './objects/mapObjectObjects.md';
import pairsObjects from './objects/pairsObjects.md';
import invertObjects from './objects/invertObjects.md';
import createObjects from './objects/createObjects.md';
import functionsObjects from './objects/functionsObjects.md';
import findKeyObjects from './objects/findKeyObjects.md';
import extendObjects from './objects/extendObjects.md';
import extendOwnObjects from './objects/extendOwnObjects.md';
import pickObjects from './objects/pickObjects.md';
import omitObjects from './objects/omitObjects.md';
import defaultsObjects from './objects/defaultsObjects.md';
import cloneObjects from './objects/cloneObjects.md';
import tapObjects from './objects/tapObjects.md';
import hasObjects from './objects/hasObjects.md';
import propertyObjects from './objects/propertyObjects.md';
import propertyOfObjects from './objects/propertyOfObjects.md';
import matcherObjects from './objects/matcherObjects.md';
import isEqualObjects from './objects/isEqualObjects.md';
import isMatchObjects from './objects/isMatchObjects.md';

import identityUtility from './utility/identityUtility.md';
import constantUtility from './utility/constantUtility.md';
import noopUtility from './utility/noopUtility.md';
import timesUtility from './utility/timesUtility.md';
import randomUtility from './utility/randomUtility.md';
import mixinUtility from './utility/mixinUtility.md';
import iterateeUtility from './utility/iterateeUtility.md';
import uniqueIdUtility from './utility/uniqueIdUtility.md';
import escapeUtility from './utility/escapeUtility.md';
import unescapeUtility from './utility/unescapeUtility.md';
import resultUtility from './utility/resultUtility.md';
import nowUtility from './utility/nowUtility.md';

import chainChaining from './chaining/chainChaining.md';
import valueChaining from './chaining/valueChaining.md';


export default {
  components:{
    eachCollections,
    mapCollections,
    reduceCollections,
    reduceRightCollections,
    findCollections,
    filterCollections,
    findWhereCollections,
    whereCollections,
    rejectCollections,
    everyCollections,
    someCollections,
    containsCollections,
    invokeCollections,
    pluckCollections,
    maxCollections,
    minCollections,
    sortByCollections,
    groupByCollections,
    indexByCollections,
    countByCollections,
    shuffleCollections,
    sampleCollections,
    toArrayCollections,
    sizeCollections,
    partitionCollections,
    compactArray,
        
    firstArray,
    initialArray,
    lastArray,
    restArray,
    flattenArray,
    withoutArray,
    unionArray,
    intersectionArray,
    differenceArray,
    uniqArray,
    zipArray,
    unzipArray,
    objectArray,
    chunkArray,
    indexOfArray,
    lastIndexOfArray,
    sortedIndexArray,
    findIndexArray,
    findLastIndexArray,
    rangeArray,
    
    bindFunctions,
    bindAllFunctions,
    partialFunctions,
    memoizeFunctions,
    delayFunctions,
    deferFunctions,
    throttleFunctions,
    debounceFunctions,
    onceFunctions,
    afterFunctions,
    beforeFunctions,
    wrapFunctions,
    negateFunctions,
    composeFunctions,
    
    isValueTypeObjects,
    keysObjects,
    allKeysObjects,
    valuesObjects,
    mapObjectObjects,
    pairsObjects,
    invertObjects,
    createObjects,
    functionsObjects,
    findKeyObjects,
    extendObjects,
    extendOwnObjects,
    pickObjects,
    omitObjects,
    defaultsObjects,
    cloneObjects,
    tapObjects,
    hasObjects,
    propertyObjects,
    propertyOfObjects,
    matcherObjects,
    isEqualObjects,
    isMatchObjects,
    
    identityUtility,
    constantUtility,
    noopUtility,
    timesUtility,
    randomUtility,
    mixinUtility,
    iterateeUtility,
    uniqueIdUtility,
    escapeUtility,
    unescapeUtility,
    resultUtility,
    nowUtility,
    
    chainChaining,
    valueChaining,
  }
}
</script>
```
:::




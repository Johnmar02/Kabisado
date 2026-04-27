
gdjs.evtsExt__RealCamera__RealCamera = gdjs.evtsExt__RealCamera__RealCamera || {};

/**
 * Object generated from Real Camera
 */
gdjs.evtsExt__RealCamera__RealCamera.RealCamera = class RealCamera extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Flip = objectData.content.Flip !== undefined ? objectData.content.Flip : false;
    this._objectData.CameraNumber = objectData.content.CameraNumber !== undefined ? objectData.content.CameraNumber : Number("0") || 0;
    this._objectData.Log = objectData.content.Log !== undefined ? objectData.content.Log : false;
    this._objectData.NumberOfCameras = Number("0") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Flip !== newObjectData.content.Flip)
      this._objectData.Flip = newObjectData.content.Flip;
    if (oldObjectData.content.CameraNumber !== newObjectData.content.CameraNumber)
      this._objectData.CameraNumber = newObjectData.content.CameraNumber;
    if (oldObjectData.content.Log !== newObjectData.content.Log)
      this._objectData.Log = newObjectData.content.Log;
    if (oldObjectData.content.NumberOfCameras !== newObjectData.content.NumberOfCameras)
      this._objectData.NumberOfCameras = newObjectData.content.NumberOfCameras;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getFlip() {
    return this._objectData.Flip !== undefined ? this._objectData.Flip : false;
  }
  _setFlip(newValue) {
    this._objectData.Flip = newValue;
  }
  _toggleFlip() {
    this._setFlip(!this._getFlip());
  }
  _getCameraNumber() {
    return this._objectData.CameraNumber !== undefined ? this._objectData.CameraNumber : Number("0") || 0;
  }
  _setCameraNumber(newValue) {
    this._objectData.CameraNumber = newValue;
  }
  _getLog() {
    return this._objectData.Log !== undefined ? this._objectData.Log : false;
  }
  _setLog(newValue) {
    this._objectData.Log = newValue;
  }
  _toggleLog() {
    this._setLog(!this._getLog());
  }
  _getNumberOfCameras() {
    return this._objectData.NumberOfCameras !== undefined ? this._objectData.NumberOfCameras : Number("0") || 0;
  }
  _setNumberOfCameras(newValue) {
    this._objectData.NumberOfCameras = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects2= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595RealCamera_9595_9595RealCamera_9546RealCamera_9546prototype_9546onCreatedContext_9546GDScreenObjects1Objects = Hashtable.newFrom({"Screen": gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects1});
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595RealCamera_9595_9595RealCamera_9546RealCamera_9546prototype_9546onCreatedContext_9546GDConsoleObjects1Objects = Hashtable.newFrom({"Console": gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1});
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595RealCamera_9595_9595RealCamera_9546RealCamera_9546prototype_9546onCreatedContext_9546GDScreenObjects1Objects, (( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[0].getX()), (( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[0].getY()), (( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects1[i].setZOrder((( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[0].getZOrder()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595RealCamera_9595_9595RealCamera_9546RealCamera_9546prototype_9546onCreatedContext_9546GDConsoleObjects1Objects, (( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[0].getX()), (( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[0].getY()), (( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1[i].setZOrder((( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[0].getZOrder()) + 1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[i]._getLog() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Console"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1);
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("Create a RealCamera object" + gdjs.evtTools.string.newLine());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[i].ChangeCamera((gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1[i]._getCameraNumber()), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects2.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onCreatedContext.GDConsoleObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.GDConsoleObjects1= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.userFunc0x15a8d48 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Obj = eventsFunctionContext.getObjects("Object")[0];
const Screen = eventsFunctionContext.getObjects("Screen")[0];
const ScreenRO = Screen.getRendererObject();

if (ScreenRO.scale.x > 0) {
    if (Obj.IsFlip()) {
        ScreenRO.scale.x *= -1;
    }
} else {
    if (!Obj.IsFlip()) {
        ScreenRO.scale.x *= -1;
    }
}


};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.userFunc0x15a8d48(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.GDConsoleObjects1.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPostEventsContext.GDConsoleObjects1.length = 0;


return;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onDestroyContext = {};


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);


return;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onHotReloadingContext = {};


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);


return;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDScreenObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDConsoleObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDConsoleObjects2= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("Flip");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects1[i]._setFlip(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Flip");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects1[i]._setFlip(false);
}
}
}

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlip = function(Flip, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Flip") return Flip;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDConsoleObjects2.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.SetFlipContext.GDConsoleObjects2.length = 0;


return;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDObjectObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDScreenObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDConsoleObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDConsoleObjects2= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDObjectObjects1[i]._toggleFlip();
}
}
}

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlip = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDConsoleObjects2.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ToggleFlipContext.GDConsoleObjects2.length = 0;


return;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDScreenObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDConsoleObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDConsoleObjects2= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1[i]._getFlip() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1[k] = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1[i]._getFlip()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1[k] = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = false;}
}

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlip = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDConsoleObjects2.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.IsFlipContext.GDConsoleObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDObjectObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDScreenObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDConsoleObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDConsoleObjects2= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDObjectObjects1[0]._getCameraNumber());}
}

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumber = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDConsoleObjects2.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.CameraNumberContext.GDConsoleObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDObjectObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDScreenObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDConsoleObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDConsoleObjects2= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.userFunc0x15a8e38 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Obj = eventsFunctionContext.getObjects("Object")[0];
const Screen = eventsFunctionContext.getObjects("Screen")[0];
const Console = eventsFunctionContext.getObjects("Console")[0];
const ScreenRO = Screen.getRendererObject();
const VideoW = ScreenRO.texture.width;
const VideoH = ScreenRO.texture.height;
//
// 事前処理
ScreenRO.texture.baseTexture.resource.source.innerHTML = "";
ScreenRO.texture.baseTexture.resource.source.autoplay = true;//PCのみ有効。iPhoneは設定反映されていない、またはユーザー操作が必要の可能性有り
//ScreenRO.texture.baseTexture.resource.source.muted = true;//必要と言われているがあるとブラウザで止まる
//ScreenRO.texture.baseTexture.resource.source.playInline = true;//メモリ再生なので意味ないのかも。
//
// Androidでは切替時に現在のトラックを停止する必要がある
if (ScreenRO.texture.baseTexture.resource.source.srcObject) {
    ScreenRO.texture.baseTexture.resource.source.srcObject.getVideoTracks().forEach((Trk) => {
        Obj.DebugLog("Stop previous video track");
        Trk.stop();
    });
}
//
// 許可申請用
Obj.DebugLog("Start permit application");
navigator.mediaDevices.getUserMedia({audio: false, video: true}).then((mediaStream_first) => {
    Obj.DebugLog("Video: " + VideoW + " x " + VideoH);
    // Android用mediaStream_first即時停止
    mediaStream_first.getVideoTracks().forEach((Trk) => {
        Trk.stop();
    });
    // デバイス情報取得
    navigator.mediaDevices.enumerateDevices().then((dev) => {
        const VideoDevices = dev.filter(d => d.kind === 'videoinput');
        const NumberOfVideoDevices = VideoDevices.length;
        const CameraNumber = (Obj.CameraNumber() < NumberOfVideoDevices && Obj.CameraNumber() >= 0) ? Obj.CameraNumber(): 0;
        Obj.DebugLog("Number of cameras: " + NumberOfVideoDevices);
        Obj._setNumberOfCameras(NumberOfVideoDevices);
        //
        const cameraSetting = {
            audio: false,
            video: {
                // スマホでは端末の向きの影響を受ける
                // Android では一般的ではないサイズを指定すると初期化に失敗する（SDサイズなど）
                // 縦横を逆転させた値も使用できる場合はあるが、トリミングで調整されるため画角が狭くなる。
                // サイズ指定なしであれば画角は最適な状態になる
                // VideoW, VideoH
                width: {ideal: VideoW},
                height: {ideal: VideoH},
                // facingMode なしだとフロントカメラだった
                //facingMode: "user",// フロントカメラ。PC、モバイルどちらもOK。
                //facingMode: "environment",// リアカメラ。PC、モバイルどちらもOK。
                //facingMode: { exact: "environment" } // リアカメラ必須。PCなどリアカメラがない場合エラー。
                deviceId: VideoDevices[CameraNumber].deviceId//許可されるまでは仮データしかアクセスできない
            }
        };
        navigator.mediaDevices.getUserMedia(cameraSetting).then((mediaStream) => {
            ScreenRO.texture.baseTexture.resource.source.srcObject = mediaStream;
            ScreenRO.scale.x *= (Obj.IsFlip() ? -1 : 1);
            Obj.DebugLog("Active camera number: " + CameraNumber);
            //
            const Track = mediaStream.getVideoTracks()[0];
            const TrackCap = Track.getCapabilities();// スペックの設定できる範囲を返す
            const TrackSet = Track.getSettings();// 現在のスペックを返す
            const TrackCon = Track.getConstraints();// 実際に要求されたスペックを返す
            // console.log(TrackCap);
            // console.log(TrackSet);
            // console.log(TrackCon);
            Obj.DebugLog("Width: " + TrackSet.width + " / Max: " + TrackCap.width.max);
            Obj.DebugLog("Height: " + TrackSet.height + " / Max: " + TrackCap.height.max);
            Obj.DebugLog("---");
            //
            //Screen.play();//あるとPC・iPhoneで表示できなくなる
        }).catch((err) => {
            Obj.DebugLog("Media Error: " + err.toString());
        });
    }).catch((err) => {
        Obj.DebugLog("Devices Error: " + err.toString());
    });
}).catch((err) => {
    Obj.DebugLog("Permit Application Error: " + err.toString());
});


};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDObjectObjects1[i]._setCameraNumber(eventsFunctionContext.getArgument("CameraNumber"));
}
}
}

}


{


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.userFunc0x15a8e38(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCamera = function(CameraNumber, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CameraNumber") return CameraNumber;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDConsoleObjects2.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.ChangeCameraContext.GDConsoleObjects2.length = 0;


return;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDObjectObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDScreenObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDConsoleObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDConsoleObjects2= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDObjectObjects1[0]._getNumberOfCameras());}
}

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCameras = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDConsoleObjects2.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.NumberOfCamerasContext.GDConsoleObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDObjectObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDScreenObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDConsoleObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDConsoleObjects2= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Screen"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDScreenObjects1);
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDScreenObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDScreenObjects1[i].play();
}
}
}

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideo = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDConsoleObjects2.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.PlayVideoContext.GDConsoleObjects2.length = 0;


return;
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext = {};
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDScreenObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDScreenObjects2= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects1= [];
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects2= [];


gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects1[i]._getLog() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects1[k] = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Console"), gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects1);
{for(var i = 0, len = gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText() + (eventsFunctionContext.getArgument("Message") + gdjs.evtTools.string.newLine()));
}
}
}

}


};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLog = function(Message, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDScreenObjectsList = [...runtimeScene.getObjects("Screen")];
var GDScreenObjects = Hashtable.newFrom({"Screen": thisGDScreenObjectsList});
var thisGDConsoleObjectsList = [...runtimeScene.getObjects("Console")];
var GDConsoleObjects = Hashtable.newFrom({"Console": thisGDConsoleObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Screen": GDScreenObjects
, "Console": GDConsoleObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Screen": thisGDScreenObjectsList
, "Console": thisGDConsoleObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RealCamera"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RealCamera"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Message") return Message;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects2.length = 0;

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDScreenObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDScreenObjects2.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects1.length = 0;
gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.DebugLogContext.GDConsoleObjects2.length = 0;


return;
}

gdjs.evtsExt__RealCamera__RealCamera.RealCamera.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("RealCamera::RealCamera", gdjs.evtsExt__RealCamera__RealCamera.RealCamera);

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,794,119,132],[162,0,35,159],[121,794,81,145],[0,0,160,600],[0,602,160,190]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.skyscrapercinnamonrolls = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapercranberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapergreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.skyscrapertable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.skyscraperturkey = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.turkeyatasteof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscraperturkey();
	this.instance.parent = this;
	this.instance.setTransform(-80,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.turkeyatasteof, new cjs.Rectangle(-80,-95,160,190), null);


(lib.trynew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBaIgSgDIgFADIgFABIgEgBIgEgCQgFgFgFgOQgFgOAAgNQAAgFADgEQADgEAEAAQAIAAAIAOIAHAKQAFAIAJADQAJAFAJAAQALgBAIgFQAGgGAAgJQAAgQgcgNIgKgFQgbgOgKgKQgJgLAAgRQAAgWAQgOQAPgPAZAAIAMABIAMADIAIgEIAGgBQAIAAAIAOQAIAOAAAPQAAAFgDAEQgDAEgFgBQgDABgEgEQgEgDgGgIQgGgMgGgDQgIgEgJAAQgJgBgHAGQgFAFgBAKQAAAHAHAGQAGAHAUAKIACABQAxAXAAAcQAAAYgSARQgTAQgcAAg");
	this.shape.setTransform(49.6,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BWQgIgDAAgHQAAgHAIgCIAFgDQAEgCACgGQACgGAAgNIAAgLIAAgOIAAgLQAAgegCgKQgBgJgEgDIgIgDQgKgDAAgGQAAgEADgDQADgDAIgDIAXgHIAQgEQAIAAADAYIAAADIABABQAJgOAJgHQAKgIAKAAQAMAAAHAIQAHAHAAAMQAAAMgFAHQgGAHgKAAIgIgCIgIgFIgEgGQgBgFgCAAQgMAAgFAQQgEARAAA0QAAAPABAHQACAIAFACIAHACQAKADAAAIQAAAGgJADQgKACgXABQgagBgJgCg");
	this.shape_1.setTransform(36,42.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BBQgZgaAAgmQAAgmAagaQAagaAmAAQAlAAAYAYQAYAYAAAmQAAAngaAbQgZAbglAAQgmAAgYgZgAgggzQgLAOAAAXQAAAiAPAXQAOAXAUAAQARAAALgOQAKgPAAgXQAAghgOgXQgPgXgUAAQgRAAgKAOg");
	this.shape_2.setTransform(19.3,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBIQgKgQgYg5IgKgaQgMgggIgEIgGgCQgKgEABgHQgBgHAKgCQAIgDAcAAQAYAAAIADQAJACgBAHIgBAGIgDADIgGACQgGADAAAEIADAOIANAhIAOAhQAEAIADAAQACAAADgFIAHgPIATgrQAHgRAAgFIgCgHIgEgDIgEgCQgJgDAAgGQAAgHAJgCQAHgDAVAAQASAAAIADQAIACAAAHQgBAHgIADIgHACQgHAEgPAiIgFAKIgHAQQgnBZgKAAQgIAAgKgRg");
	this.shape_3.setTransform(0.8,43.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBRIgJgJIgIAEQgUAOgWAAQgZAAgQgOQgPgPAAgYQAAgbATgPQAVgPAkAAQAIAAAFACQAEADAAAGQAAAKgMAAQgRAAgKAIQgKAIAAAPQAAAOAJAIQAIAIAQAAQAQAAAHgHQAHgIAAgSIAAhBQAAgPgHgIQgGgIgMAAQgIAAgHADQgHAEgHAIIgEAEQgLAOgLAAQgHAAgEgFQgEgEAAgIQAAgQAUgLQAUgLAfAAQATAAAOAFQANAFAIAKQAFAGACALQACAKAAAZIAAA3QABAKABAFQACAEADABIAGACQAKADABAGQAAAIgMAHQgMAGgPAAQgIAAgIgJg");
	this.shape_4.setTransform(-17.3,43.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcB8QgJgDAAgHQAAgGAHgDIAJgEQADgDABgLIABgiIAAgbIAAggIAAgNQAAgsgBgMQgCgMgEgDIgKgDQgLgEAAgFQAAgFADgDQAEgDAMgEIAXgGIARgDQAFAAACAEQADADAAAIIgBANQgCA+AAA9IABA8QABAMADAEIAKAEQAIADAAAHQAAAGgJADQgIADgXAAQgZAAgIgDg");
	this.shape_5.setTransform(-31.8,39.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXB8QgKgEAAgIQABgGAIgEQAKgDACgCQABgEACgaIABhDIgBg/QgCgbgBgDQgCgCgKgEQgIgEgBgHQABgHAHgCQAIgDAeAAIBpAAIARgCIAJgBIAFAAIACADQAEAHAEALQACAMAAAJQAAAIgCAEQgDAEgFAAQgHAAgHgMIgEgIQgEgGgIgDQgIgCgMAAIgXAAQgQAAgJABQgIACgDAFQgDADgCALIgBAhIAAAPQABAIABACQABACAFAAIAbAAQAOAAAGgEQAFgEACgLIAAgDQADgSAJAAQAHAAAEAKQADAJAAAhQAAAggDAJQgDAKgIAAQgJAAgDgTIAAgCQgCgLgFgEQgGgEgOAAIgbAAQgEAAgCADQgBADgBALIAAANIABAwQABALAEACIAIAEQAKAEAAAHQAAAHgJAEQgKADgbgBQgcABgJgDg");
	this.shape_6.setTransform(-46.5,39.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKATIgVg2QgJgYgJgEIgEgCQgKgEAAgHQAAgHAJgCQAIgDAbAAQAXAAAJADQAIACAAAHIgBAGIgDADIgGACQgHADAAAEIAEALIANAkIAQAhQADAIADAAQACAAADgFIAIgPIASgrQAHgRAAgFIgCgHIgEgDIgEgCQgJgDABgGQgBgHAJgCQAHgDAWAAQASAAAHADQAIACAAAHQgBAHgIADIgGACQgJAEgQAkIgDAIIgHAQQgnBZgMAAQgMAAgehGgAhlAKIgFgLIgMgdQgKgdgIgEIgFgCQgKgEAAgHQAAgHAJgCQAIgDAcAAQAYAAAIADQAIACAAAHIgBAGIgDADIgGACQgGADgBAEIAFAOIAMAhIAPAgQAEAJADAAQAFAAAFgLIAFgMIAEgFQACgCAEAAQAEAAADACQACADAAAEQAAAFgEAJQgSAogIANQgJANgGAAQgMAAgihPg");
	this.shape_7.setTransform(54.1,4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3BBQgZgZAAglQAAgoAZgaQAagaAmAAQAhAAAUATQATATAAAgQAAALgDADQgDAEgNAAIhBAAQgGAAgDgDQgDgDAAgFQAAgEADgDQADgCAFAAIAkAAIAJgBQACgCAAgEQAAgQgLgMQgMgLgPAAQgVAAgKASQgJASAAAZQAAAaANAUQAOAUAVAAQANAAAJgDQAJgDAIgGIAGgFQAJgHAFAAQADAAADADQACACAAAEQAAAEgEAGQgEAGgIAGQgPAMgOAGQgOAFgQAAQgkAAgYgZg");
	this.shape_8.setTransform(30.5,4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPAwIgFgIIglguIgjgtIgPgQIAAALIAAAYIAAAQQAABLACAUQACATAFAAQAFAAAFAEQAFAEAAAEQAAAIgIADQgJADgUAAQgVAAgIgDQgIgDAAgIQAAgGAKgEQAJgDABgDQADgDABgZIABhEIgBhAQgCgagCgDQgBgDgJgEQgKgDAAgHQAAgHAIgCQAIgDAVAAIATABIAHACIAZAeIAiAtIAmAvIAbAgIASAUIABgHIAAgNIgBhVQgCgjgBgGIgCgEIgEgCQgKgEgCgCQgDgDAAgEQAAgHAHgCQAHgDAYAAQAVAAAHADQAIACAAAHQAAAEgCACIgHAFIgEABQgHADgBAEQgCAHgBAiIgBBoIAAAgIAAAWQAAANgBADQgCADgFAAQgSAAg+hNg");
	this.shape_9.setTransform(8,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhPByQgIgHAAgLQAAgIAGgHQAGgGAIAAIAIABIAFAEIAFAHQAEAHAEAAQAJAAAJgNQAJgNAAgNQAAgPgMgcIgCgEIgcg8IgQghQgDgGgKgFIAAAAQgGgCgCgCQgCgDAAgEQAAgHAJgDQAJgDAZAAQAaAAAIADQAIACAAAHIgBAGIgDADIgGADQgHACAAADIAEANIAOAjIANAgQAFAJACAAQACAAAEgJIALgbIANgiQAEgMAAgFQAAgFgKgFQgKgGAAgEQAAgGAIgDQAIgCAUAAQAVAAAHADQAHACAAAHQAAAHgKACIgHACQgKAGgLAdIgFANIgWA3QgcBIgSAWQgSAVgZAAQgNAAgIgHg");
	this.shape_10.setTransform(-23.7,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BWQgIgDAAgHQAAgHAIgCIAFgDQAEgCACgFQACgHAAgNIAAgMIAAgNIAAgLQAAgegCgKQgBgJgEgDIgIgDQgKgDAAgGQAAgEADgDQADgDAIgDIAXgHIAQgDQAIAAADAXIAAAEIABAAQAJgOAJgHQAKgIAKAAQAMAAAHAIQAHAHAAAMQAAAMgFAHQgGAHgKAAIgIgCIgIgFIgEgGQgBgFgCAAQgMAAgFAQQgEARAAA0QAAAPABAHQACAIAFACIAHACQAKADAAAIQAAAGgJADQgKADgXgBQgaABgJgDg");
	this.shape_11.setTransform(-38.6,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjB7QgKgDAAgIQAAgHAJgDQAJgEACgCQACgDABgdIABhRIgBgtIgBgcQAAgFgDgBQgDgCgHAAIgIAAQgMAAgGADQgHADgFAHIgFALIgGAMIgEAFQgDACgEAAQgFAAgCgEQgCgFgBgKQABgXAFgOQAFgOAIAAIACAAQAOACAVAAIBlAAQAVAAANgCIADAAQAIAAAFAOQAFAOABAXQAAAKgDAFQgCAEgFAAIgGgCIgGgFIgEgMIgGgLQgFgHgGgDQgIgDgLAAIgIAAQgHAAgCACQgDABgBAFIgCAcIAAAtIABBRQABAdACADQACACAJAEQAJADAAAHQABAIgKADQgKADgbAAQgaAAgJgDg");
	this.shape_12.setTransform(-56.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-22.5,140.3,84.1);


(lib.tastingevent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAzIgFgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgBIgIAAIgIAAIgEABQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgDIABgDIABgDIADgBIBFAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAADIgBADIgBADIgDACIgUAAIgEABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIAABIQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDABIgEABg");
	this.shape.setTransform(53.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_1.setTransform(43.6,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAyIgDgBIgCgCIAAhdQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIBGAAIACACIABADIAAADIAAADIAAAEIgDADIg0AAIgCABIgCADIAAAOQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAhAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAAACQAAAEgDACIghAAIgDABIgCAEIAAAPIABAEIAEABIAzAAQADACAAAEIAAADIAAAEIgBADIgDABg");
	this.shape_2.setTransform(33.9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAxIgDgGIgFgLIgHgPIgGgQIgHgPIgGgOIgEgKIgCgFIABgDIAEgCIAEgBIADAAIAEABIADADIAUAyIABABIABABQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAIAUgyIADgEQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAEAAIADABIAEADIABADIgCAEIgEAKIgGAOIgHAPIgHARIgGAPIgFALIgDAGIgBACIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_3.setTransform(24.2,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAyIgDgBIgCgCIAAhdQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIBGAAIACACIABADIAAADIAAADIAAAEIgDADIg0AAIgCABIgCADIAAAOQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAhAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAAACQAAAEgDACIghAAIgDABIgCAEIAAAPIABAEIAEABIAzAAQADACAAAEIAAADIAAAEIgBADIgDABg");
	this.shape_4.setTransform(15.3,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAzIgLgDIgJgFIgIgFQgEgEgCgEIgFgJQgFgKAAgLIABgKIAEgKQAEgJAHgIIAIgGIAJgFIALgCIAJgBIAMABIALADQALAFAHAJIABABIgCAEIgDAEIgEACIgDACQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBIgGgEIgIgFQgFgCgHAAQgGAAgGADQgGADgFAFQgFAEgDAGQgCAHAAAGQAAAHACAGQADAGAFAFQAFAFAGADQAGACAGAAIAHAAIAHgCQAEAAADgDIAEgGIABgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgDgBIgSAAIgDgBIgBgEIAAgDIAAgEIABgDIACgCIArAAIABABIACABQACAEAAAFIAAAEIgBAFQgDAHgFAGQgFAGgHAEQgGAEgHACQgIACgIAAIgJgBg");
	this.shape_5.setTransform(-0.4,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_6.setTransform(-11.4,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAA0IgDAAQgEAAgBgDIAAhgIACgDIAEgBIADAAIADAAQAEAAABAEIAABfIgCADIgDABg");
	this.shape_7.setTransform(-18.9,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAzIgFgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgBIgIAAIgIAAIgEABQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgDIABgDIABgDIADgBIBFAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAADIgBADIgBADIgDACIgUAAIgEABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIAABIQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDABIgEABg");
	this.shape_8.setTransform(-25.3,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAxQgKgFgJgHIgBgCIAAgDIABgCIAEgEIADgDIADgBQABAAABABQAAAAABAAQAAAAABABQAAAAABAAIAHAFIAIAEQAFACAGAAIAIgBIAIgCIAFgFQACgDAAgEQAAgEgCgDIgIgDIgKgDIgKgBIgMgDQgHgBgEgDQgEgDgDgEQgDgGAAgHQAAgIAEgGQAEgGAGgDQAGgEAHgCQAIgBAGAAIAJABIAKABIAKAFIAIAFIAAACIABACIgCADIgCADIgFADIgDABIgDgBQgFgEgHgDQgGgCgGAAIgHAAIgGACQgDABgCADQgCADgBAEQAAAFAFADQAFADAHAAIAPADQAIABAIACQAGADAFAFQAFAFAAALQAAAIgEAHQgEAGgHAEQgGAEgIACQgIACgGAAQgLAAgLgDg");
	this.shape_9.setTransform(-34.3,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAnAzIgDAAIgEgBQgEAAgBgDIgFgOIgCgCIgDAAIghAAIgBAAIgBABIgCABIgBAAIgGAOIgBACIgDABIgDAAIgDABIgCgBIgEAAIgCgBIgBgBIAohfIADgCIADgBIAEAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAIAnBeIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDABgAgBgOIgBADIgDAFIgCAFIgCAFIgCAFIgBACIABACIACABIATAAIACgBIABgBIgCgFIgDgIIgDgIIgDgFIgCgBIAAAAg");
	this.shape_10.setTransform(-44,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBAzIgFgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhKQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgBIgIAAIgIAAIgEABQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgFIAAgDIABgDIABgDIADgBIBFAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAFIAAADIgBADIgBADIgDACIgUAAIgEABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIAABIQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDABIgEABg");
	this.shape_11.setTransform(-53.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.3,-9.3,118.7,18.7);


(lib.skyscrapertableatasteof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapertable();
	this.instance.parent = this;
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skyscrapertableatasteof, new cjs.Rectangle(-80,-300,160,600), null);


(lib.skyscrapercranberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapercranberries();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skyscrapercranberries_1, new cjs.Rectangle(-17.5,-79.5,35,159), null);


(lib.skyscrapercinnamonrolls_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapercinnamonrolls();
	this.instance.parent = this;
	this.instance.setTransform(-59.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skyscrapercinnamonrolls_1, new cjs.Rectangle(-59.5,-66,119,132), null);


(lib.novfourthfifth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAzIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgDIAAgFIABgEIADgEIArgiIAGgGQADgEAAgFQAAgEgCgCQgCgDgDgCIgGgDIgFgBQgGAAgEACIgGAEIgGAFQgCACgCAAIgEgBIgDgCIgCgDIgBgDIABgDIAHgIIAIgFQAKgEAKAAQAHAAAHACQAGACAGAEQAEAEADAGQAEAGAAAHQAAAJgGAHQgFAGgGAFIgaAUIgBACIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABIAlAAIAEABIACACIAAADIABADIgBAFQgBAAAAABQAAAAgBABQAAAAgBAAQgBAAgBAAg");
	this.shape.setTransform(29.9,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIAyIgFAAIgCgCQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAg+IgBgCIgDgBIgCABIgEABQgDAAgCgCQgCgDAAgDIABgFQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIADgCIAGgDIAFgDIAFgEIAFgCIACgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAIAABaQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgEABg");
	this.shape_1.setTransform(22.3,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAIIgDgBIgBgCIgBgDIAAgCIAAgCIABgCIACgCIACgBIAYAAIADABIACACIAAACIABACIgBAEIgDADIgCABg");
	this.shape_2.setTransform(18.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHAyIgDAAIgEgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAg+IgBgCIgCgBIgDABIgEABQgDAAgCgCQgCgDAAgDIABgFQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAIACgCIAGgDIAFgDIAFgEIAEgCIAEgBQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAIAABaQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgEABg");
	this.shape_3.setTransform(12.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHAyIgDAAIgEgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAg+IgBgCIgCgBIgEABIgDABQgDAAgCgCQgCgDAAgDIABgFQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAIACgCIAGgDIAFgDIAFgEIAEgCIAEgBQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAIAABaQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgFABg");
	this.shape_4.setTransform(7.5,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(-0.8,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAxIgDgGIgFgLIgHgPIgGgQIgHgPIgGgOIgEgKIgCgFIABgDIAEgCIAEgBIADAAIAEABIADADIAUAyIABABIABABQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAIAUgyIADgEQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAEAAIADABIAEADIABADIgCAEIgEAKIgGAOIgHAPIgHARIgGAPIgFALIgDAGIgBACIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_6.setTransform(-7.3,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAzIgKgDIgJgEIgIgHQgIgHgEgJIgDgKIgBgLIABgKIADgKQAEgJAIgHIAIgGIAJgFIAKgDIAKgBIALABIAKADQAKAEAHAHQAIAHAEAJQAEAKAAAKIgBALIgDAKQgEAJgIAHQgHAHgKAEIgKADIgLABIgKgBgAgMgfQgGADgFAEQgFAFgDAGQgCAHAAAGQAAAHACAHQADAGAFAFQAFAEAGADQAGADAGAAQAHAAAGgDQAGgDAFgEQAFgFADgGQACgHAAgHQAAgGgCgHQgDgGgFgFQgFgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_7.setTransform(-17.7,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_8.setTransform(-28.9,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-9.3,72.7,18.7);


(lib.nearyou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAxQgJgDgGgGQgFgGgEgIIgDgIIgBgJIABgbIAAgcIABgDIADgBIAEgBIADAAIAFABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAzQAAAGACAFQABAFAEAFQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEABgGQACgFAAgGIAAgzQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIADAAIAEAAIADACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAA3IgBAJIgDAIQgDAIgHAGQgFAGgJADQgIADgJAAQgIAAgIgDg");
	this.shape.setTransform(32.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAzIgKgDIgJgEIgIgHQgIgHgEgJIgDgKIgBgLIABgKIADgKQAEgJAIgHIAIgGIAJgFIAKgDIAKgBIALABIAKADQAKAEAHAHQAIAHAEAJQAEAKAAAKIgBALIgDAKQgEAJgIAHQgHAHgKAEIgKADIgLABIgKgBgAgMgfQgGADgFAEQgFAFgDAGQgCAHAAAGQAAAHACAHQADAGAFAFQAFAEAGADQAGADAGAAQAHAAAGgDQAGgDAFgEQAFgFADgGQACgHAAgHQAAgGgCgHQgDgGgFgFQgFgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(21.3,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDA1IgCgBIgCgBIgBgCIAAgkIgBgGIgDgFIgdgsIAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIADgDIADgBIAEgBIADABIACACIAUAgIACACIACABIACgBIACgCIAUggIADgDIADgBIAEABIADACIAEACIABADIAAABIgBABIgdAsIgCAGIgBACIAAADIAAAjQgBAEgEAAIgFABg");
	this.shape_2.setTransform(10.8,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAzIgDgBIgCgBIgCgBIgRgaIgCgEIgFgBIgMAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIAAAZQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDACIgEAAIgEAAIgEgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAgBIAAhbQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIADgBIAqAAQAIAAAGACQAGADAFAEQAGAEACAHQADAGAAAIQgBAJgDAFQgCAEgFADIgGAGQgEACAAACIAAACIAFAGIAFAIIAFAIIACAFIgBADIgCACIgFACIgDAAgAgUggQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAABIAAAWQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAQAAABABAAQABAAAAAAQABAAAAAAQABAAAAAAIAUAAIAHAAIAHgDQADgCABgEQACgDAAgEQAAgIgGgFIgHgDIgHgBIgUAAIgEABg");
	this.shape_3.setTransform(-2.7,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnAzIgCAAIgGgBQgDAAAAgDIgGgOIgCgCIgCAAIgiAAIgBAAIgBABIgDABIAAAAIgFAOIgCACIgDABIgDAAIgDABIgDgBIgDAAIgCgBIgBgBIAohfIADgCIADgBIAEAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAIAnBeIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDABgAgBgOIgCADIgCAFIgCAFIgCAFIgDAFIAAACIABACIACABIATAAIACgBIABgBIgCgFIgDgIIgEgIIgCgFIgCgBIAAAAg");
	this.shape_4.setTransform(-13.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAyIgDgBIgCgCIAAhdQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgBIBGAAIACACIABADIAAADIAAADIAAAEIgDADIg0AAIgCABIgCADIAAAOQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIADABIAhAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAAACQAAAEgDACIghAAIgDABIgCAEIAAAPIABAEIAEABIAzAAQADACAAAEIAAADIAAAEIgBADIgDABg");
	this.shape_5.setTransform(-22.5,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA1IgDgEIgpg4QAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIAAAzQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAIgFABIgGAAQgCgBgCgDIAAhfQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgCIADAAIADAAQAFAAACADIApA2IACABIACAAIABgCIAAgzQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAEgBIAEAAQAEAAACAFIAABfIgDADIgEABg");
	this.shape_6.setTransform(-33.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-9.3,81.1,18.7);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgMLguaIYXAAMAAABc1I4XAAg");
	this.shape.setTransform(0,0,1.019,1.008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-80.5,-300.5,161,601), null);


(lib.foryour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBoQgJgDgGgGQgGgFgDgKQgCgJAAgaIAAhcIgQAAIgFgBIgCgFIAAgEQAAgGASgPIAHgGIAHgGQASgQAHAAIAEACQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABIAAAgIAnAAQAEAAACACQABABAAAFIAAAEQAAAFgBACQgCACgEAAIgkAAIgDABIgBAEIAABVQAAAXAEAFQAEAGAKAAQAGAAAIgDIAMgDQAEAAACADQADACAAADQAAAKgPAJQgPAJgSAAQgKAAgIgDg");
	this.shape.setTransform(36.3,41.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBaIgTgDIgFADIgGABIgDgBIgDgCQgGgFgFgOQgFgOAAgNQAAgFADgEQADgEAEAAQAIAAAIAOIAHAKQAFAIAJADQAJAFAJAAQAMgBAGgFQAHgGAAgJQAAgQgcgNIgKgFQgbgOgJgKQgKgLAAgRQAAgWAPgOQAQgPAaAAIAKABIANADIAIgEIAGgBQAIAAAIAOQAIAOAAAPQAAAFgDAEQgDAEgEgBQgFABgDgEQgEgDgFgIQgHgMgHgDQgGgEgKAAQgKgBgFAGQgHAFABAKQAAAHAGAGQAGAHAVAKIACABQAwAXAAAcQAAAYgTARQgSAQgcAAg");
	this.shape_1.setTransform(22.6,43);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBRIgKgJIgHAEQgVAOgVAAQgZAAgQgOQgQgPAAgYQAAgbAVgPQAUgPAkAAQAIAAAEACQAFADAAAGQAAAKgMAAQgQAAgLAIQgLAIAAAPQABAOAIAIQAKAIAPAAQAQAAAHgHQAHgIAAgSIAAhBQAAgPgGgIQgHgIgLAAQgJAAgHADQgHAEgHAIIgEAEQgKAOgMAAQgHAAgEgFQgEgEAAgIQAAgQAUgLQAUgLAgAAQASAAANAFQAPAFAHAKQAFAGADALQACAKAAAZIAAA3QgBAKACAFQACAEAEABIAEACQALADAAAGQAAAIgLAHQgLAGgQAAQgIAAgIgJg");
	this.shape_2.setTransform(6.2,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BBQgZgZAAglQAAgoAZgaQAagaAmAAQAhAAAUATQATATAAAgQAAALgDADQgDAEgNAAIhBAAQgGAAgDgDQgDgDAAgFQAAgEADgDQADgCAFAAIAkAAIAJgBQACgCAAgEQAAgQgLgMQgMgLgPAAQgVAAgKASQgJASAAAZQAAAaANAUQAOAUAVAAQANAAAJgDQAJgDAIgGIAGgFQAJgHAFAAQADAAADADQACACAAAEQAAAEgEAGQgEAGgIAGQgPAMgOAGQgOAFgQAAQgkAAgYgZg");
	this.shape_3.setTransform(-12.4,43.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXB8QgKgEAAgIQABgGAIgEQAKgDACgCQABgEACgaIABhDIgBg/QgCgbgBgDQgCgCgKgEQgIgEgBgHQABgHAHgCQAIgDAeAAIBpAAIARgCIAJgBIAFAAIACADQAEAHAEALQACAMAAAJQAAAIgCAEQgDAEgFAAQgHAAgHgMIgEgIQgEgGgIgDQgIgCgMAAIgXAAQgQAAgJABQgIACgDAFQgDADgCALIgBAhIAAAPQABAIABACQABACAFAAIAbAAQAOAAAGgEQAFgEACgLIAAgDQADgSAJAAQAHAAAEAKQADAJAAAhQAAAggDAJQgDAKgIAAQgJAAgDgTIAAgCQgCgLgFgEQgGgEgOAAIgbAAQgEAAgCADQgBADgBALIAAANIABAwQABALAEACIAIAEQAKAEAAAHQAAAHgJAEQgKADgbgBQgcABgJgDg");
	this.shape_4.setTransform(-31.7,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BWQgIgDAAgHQAAgHAIgCIAFgDQAEgCACgFQACgHAAgNIAAgMIAAgNIAAgLQAAgegCgKQgBgJgEgDIgIgDQgKgDAAgGQAAgEADgDQADgDAIgDIAXgHIAQgDQAIAAADAXIAAAEIABAAQAJgOAJgHQAKgIAKAAQAMAAAHAIQAHAHAAAMQAAAMgFAHQgGAHgKAAIgIgCIgIgFIgEgGQgBgFgCAAQgMAAgFAQQgEARAAA0QAAAPABAHQACAIAFACIAHACQAKADAAAIQAAAGgJADQgKADgXgBQgaABgJgDg");
	this.shape_5.setTransform(57.5,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmBYQgDgDAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgDADQgHAIgLAFQgKAEgMAAQgNAAgLgFQgMgFgHgJQgJgKgDgOQgDgOgBgkIAAgMIAAgMIAAgEQAAgOgCgEQgBgEgHgCIgHgCQgJgDAAgGQAAgEAEgDQADgDAMgEIAYgHIASgCQAFAAACADQABAEAAAHIAAAHIgBBBQAAAiAHAOQAHANASAAQASAAAKgRQAIgSAAgpIAAgNQAAgOgCgEQgCgEgGgCIgHgCQgKgDABgGQAAgEADgDQADgDANgEIAWgHIASgCQAGAAACADQACADAAAIIgBAKIgBBGIAAAeIABALQABAHAJAEIAAAAIAEABQAJADAAAGQAAAEgDADQgDACgIADIgYAIQgMADgGAAQgFAAgCgCg");
	this.shape_6.setTransform(40.1,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BBQgZgaAAgmQAAgmAagaQAagaAmAAQAlAAAYAYQAYAYAAAmQAAAngaAbQgZAbglAAQgmAAgYgZgAgggzQgLAOAAAXQAAAiAPAXQAOAXAUAAQARAAALgOQAKgPAAgXQAAghgOgXQgPgXgUAAQgRAAgKAOg");
	this.shape_7.setTransform(20.2,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkB6QgJgDAAgIQAAgHAKgEIAIgEQAGgEAAhGIABgQIgVghIghg0QgKgOgFgEIgJgEQgMgEAAgGQAAgHAJgDQAIgDAhAAQAiAAAIADQAIADAAAHQAAAGgNAFIgBABIgGADIgBAFQAAAEAHANIAiA1IAegtQAJgPAAgFQAAgFgCgDQgDgDgIgDQgGgCgCgDQgDgCAAgEQAAgHAIgDQAGgDAdAAQAcAAAHADQAIADAAAHQAAAGgKAFIgNAGQgIAGgQAZQgRAZgZArIAAAeQABA6AFADIAIAEQAKAEAAAHQAAAIgJADQgJADgcAAQgaAAgKgDg");
	this.shape_8.setTransform(-0.6,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BWQgIgDAAgHQAAgHAIgCIAFgDQAEgCACgFQACgHAAgNIAAgMIAAgNIAAgLQAAgegCgKQgBgJgEgDIgIgDQgKgDAAgGQAAgEADgDQADgDAIgDIAXgHIAQgDQAIAAADAXIAAAEIABAAQAJgOAJgHQAKgIAKAAQAMAAAHAIQAHAHAAAMQAAAMgFAHQgGAHgKAAIgIgCIgIgFIgEgGQgBgFgCAAQgMAAgFAQQgEARAAA0QAAAPABAHQACAIAFACIAHACQAKADAAAIQAAAGgJADQgKADgXgBQgaABgJgDg");
	this.shape_9.setTransform(-27.5,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+BBQgZgaAAgmQAAgmAagaQAagaAmAAQAlAAAYAYQAYAYAAAmQAAAngaAbQgZAbglAAQgmAAgYgZgAgggzQgLAOAAAXQAAAiAPAXQAOAXAUAAQARAAALgOQAKgPAAgXQAAghgOgXQgPgXgUAAQgRAAgKAOg");
	this.shape_10.setTransform(-44.2,4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwB8QgJgDAAgHQABgFAHgDIAFgCQAEgCACgGQACgGAAgOIAAgRIAAhTIgUAAQgEAAgBgBQgCgCAAgFIAAgEQAAgFACgBQACgCAEAAIASAAIgCgOIgBgMQAAgbAQgOQAQgPAbAAQAUAAANAJQAMAJAAAOQAAAIgFAEQgEAEgJAAQgFAAgEgCQgFgDgDgEIgDgHQgGgMgKAAQgHAAgDAEQgEAEAAAHIAEAUQADAPAAAMIAZAAQAFAAACABQABACAAAFIAAAEQAAAEgBACQgCACgFAAIgZAAIAABYQABAXABAGQABAHAEACIAHACQAKAEAAAHQAAAGgIADQgJADgZAAQgYAAgJgDg");
	this.shape_11.setTransform(-57.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.8,-22.5,131.6,84.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AqNYMQktiAjpjoQjpjph/ktQiEk4AAlWQAAlVCEk4QB/ktDpjpQDpjpEth/QE4iEFVAAQFWAAE4CEQEtB/DpDpQDoDpCAEtQCEE4AAFVQAAFWiEE4QiAEtjoDpQjpDoktCAQk4CElWAAQlVAAk4iEg");
	this.shape.setTransform(168,168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,336,336), null);


(lib.findanevent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAzQgIgFgGgHIALgJQADAFAGADQAGAEAHAAIAGgBIAHgEQADgCACgDQACgDAAgFQAAgFgCgDIgFgFIgIgEIgJgCIgJgEQgFgBgEgDQgEgEgCgEQgCgGAAgHQAAgHADgGQADgFAFgEQAFgEAHgBQAGgCAGAAIAIABIAIADQAIADAEAFIgKAKQgDgEgFgDQgFgCgGAAIgHAAIgGADIgEAGQgCADAAAEQAAAEABADIAEAFIAHADIAIADIAKAEQAFACAFACIAHAIQACAGAAAHQAAAIgDAGQgCAFgFAEQgFAFgGABQgHACgGAAQgKAAgJgDg");
	this.shape.setTransform(49.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAzIAAhlIAOAAIAABZIAtAAIAAAMg");
	this.shape_1.setTransform(42.4,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAzIAAhlIANAAIAABlg");
	this.shape_2.setTransform(36.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiAzIgKgZIgvAAIgLAZIgQAAIAthlIAMAAIAsBlgAATANIgTgvIgTAvIAmAAg");
	this.shape_3.setTransform(29.1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAzIAAhZIghAAIAAgMIBPAAIAAAMIghAAIAABZg");
	this.shape_4.setTransform(19.8,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAzIAAhlIBBAAIAAAMIgzAAIAAAfIAwAAIAAALIgwAAIAAAjIA1AAIAAAMg");
	this.shape_5.setTransform(11.6,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsAzIAAhlIAjAAQAJAAAKACQAKADAHAHQAIAGAFAKIAEAKIABAMIgBAMIgEALIgFAJQgDAEgFADQgHAGgKADQgMADgHAAgAgeAnIASAAQAJAAAHgDQAIgDAGgFQAGgEADgIIACgHIABgJIgBgIIgCgIQgDgHgGgFQgGgFgIgCQgHgDgJAAIgSAAg");
	this.shape_6.setTransform(1.7,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAzIAAhZIghAAIAAgMIBPAAIAAAMIghAAIAABZg");
	this.shape_7.setTransform(-11.8,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAzIg1hTIAABTIgPAAIAAhlIATAAIA1BRIAAhRIAOAAIAABlg");
	this.shape_8.setTransform(-21.4,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAzIAAhlIBBAAIAAAMIgyAAIAAAfIAvAAIAAALIgvAAIAAAjIA0AAIAAAMg");
	this.shape_9.setTransform(-31.1,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAzIgohlIAQAAIAeBTIABAAIAehTIAQAAIgpBlg");
	this.shape_10.setTransform(-40.4,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAzIAAhlIBBAAIAAAMIgyAAIAAAfIAvAAIAAALIgvAAIAAAjIA0AAIAAAMg");
	this.shape_11.setTransform(-49.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.findanevent, new cjs.Rectangle(-55.8,-10.9,111.7,21.9), null);


(lib.ctarollovervideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AqBCfIAAk9IUDAAIAAE9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarollovervideo, new cjs.Rectangle(-64.1,-15.8,128.3,31.8), null);


(lib.ctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AqeCqIAAlTIU9AAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangle, new cjs.Rectangle(-67.1,-17,134.3,34), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.atasteofgreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skyscrapergreens();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-72.5,81,145);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,0,0.189,0.189);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(24.6,11.2,0.189,0.189);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(-2.1,16,0.189,0.189);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(24.6,10.9,0.189,0.189);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(-9.2,5.7,0.189,0.189);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-8.4,16.6,0.189,0.189);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(12.2,5.7,0.189,0.189);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(1.3,5.7,0.189,0.189);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.189,0.189,0,0,0,168.1,168.1);
	this.instance.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33,66,66);


(lib.ctarollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// Layer 1
	this.instance = new lib.ctarollovervideo();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(7).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-15.8,128.3,31.8);


// stage content:
(lib.wideskyscraperatasteofseven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		
		console.log("this frame works");
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_180 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(114).call(this.frame_180).wait(6));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(82.2,302,0.797,0.919,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(186));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(186));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.1,300);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(177));

	// white-logo
	this.instance_2 = new lib.whitelogo("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,37);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.06,scaleY:0.06},0).to({scaleX:1.53,scaleY:1.53,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.42,scaleY:1.42,y:36.9},7,cjs.Ease.get(1)).wait(164));

	// tasting-event
	this.instance_3 = new lib.tastingevent("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,163.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({startPosition:0},0).to({alpha:1},10).wait(161));

	// near-you
	this.instance_4 = new lib.nearyou("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,185.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({startPosition:0},0).to({alpha:1},10).wait(161));

	// try-new
	this.instance_5 = new lib.trynew("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,223.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({startPosition:0},0).to({alpha:1},10).wait(149));

	// for-your
	this.instance_6 = new lib.foryour("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(80,299.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({startPosition:0},0).to({alpha:1},10).wait(139));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmaePIAAjQIT3AAIAADQg");
	mask.setTransform(86.1,193.5);

	// date
	this.instance_7 = new lib.novfourthfifth("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,376.7);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({startPosition:0},0).to({alpha:1},10).to({startPosition:0},6).wait(120));

	// find-an-event
	this.instance_8 = new lib.findanevent();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,417.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({alpha:1},10).wait(110));

	// cta-rollover
	this.cta_rollover = new lib.ctarollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(80.2,418.1,1.046,1.068,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(186));

	// cta-rectangle
	this.instance_9 = new lib.ctarectangle();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,418);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({alpha:1},10).wait(110));

	// greens
	this.instance_10 = new lib.atasteofgreen("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(40.5,72.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(76).to({startPosition:0},0).to({alpha:1},10).wait(100));

	// cinnamon-rolls
	this.instance_11 = new lib.skyscrapercinnamonrolls_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(100.5,66);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(86).to({alpha:1},10).wait(90));

	// turkey
	this.instance_12 = new lib.turkeyatasteof();
	this.instance_12.parent = this;
	this.instance_12.setTransform(80,505);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(106).to({alpha:1},10).wait(70));

	// cranberries
	this.instance_13 = new lib.skyscrapercranberries_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(17.5,419.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(96).to({alpha:1},10).wait(80));

	// table
	this.instance_14 = new lib.skyscrapertableatasteof();
	this.instance_14.parent = this;
	this.instance_14.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.9,300,164.4,603.3);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
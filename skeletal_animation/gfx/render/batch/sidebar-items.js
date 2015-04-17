initSidebarItems({"enum":[["Error","An error occurring at batch creation"]],"type":[["BatchData","Return type for `Batch::get_data()``"],["CoreBatchFull","A `CoreBatch` completed by a slice, shader parameters, and a context Implements `Batch` thus can be drawn. It is meant to be a struct, but we have lots of lifetime issues with associated resources, binding which looks nasty (#614)"],["ImplicitBatch","A batch that is constructed on the fly when rendering. Meant to be a struct, blocked by #614"],["RefBatchFull","A `RefBatch` completed by the a batch context Implements `Batch` thus can be drawn. It is meant to be a struct, but we have lots of lifetime issues with associated resources, binding which looks nasty (#614)"]],"fn":[["bind","Create an implicit batch"]],"trait":[["Batch","Abstract batch trait"]],"struct":[["Context","Factory of ref batches, required to always be used with them."],["CoreBatch","Referenced core - a minimal sealed batch that depends on `Context`. It has references to the resources (mesh, program, state), that are held by the context that created the batch, so these have to be used together."],["OutOfBounds","Error accessing outside of the array"],["OwnedBatch","Owned batch - self-contained, but has heap-allocated data"],["RefBatch","An expanded version of the `CoreBatch`, carrying the parameters and the mesh slice with it, publicly mutable."]]});
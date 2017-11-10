        function getQueryStringArgs(){
            var qs=(location.search.length>0?location.search.substring(1):''),
                args={},
                items=qs.length?qs.split("&"):[],
                item=null,
                name=null,
                value=null,
                i=null,
                len=items.length;
            for(i=0;i<len;i++){
                item=items[i].split("=");
                name=decodeURIComponent(item[0]);
                value=decodeURIComponent(item[0]);
                if(name.length){
                    args[name]=value;
                }
            }
            console.log(1)
        }
        getQueryStringArgs('?shelf_code=SHELF00251400002&dot_id=22')

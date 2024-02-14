<template>
  <div>
    <q-page>
      <q-header elevated class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white text-primary">
          <q-toolbar-title class="q-ml-md">
            <q-skeleton :type="'text'" width="150px" />
          </q-toolbar-title>
          <q-btn flat round dense>
            <q-skeleton :type="'text'" width="10px" height="40px"
          /></q-btn>
        </q-bar>
      </q-header>

      <div class="q-pa-md">
        <q-card flat bordered fullwidth>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" animation="fade" />
              </q-item-label>
            </q-item-section>
            <q-card-section side>
              <q-skeleton :type="'QCheckbox'" size="20px" />
            </q-card-section>
          </q-item>

          <q-item-label class="q-pt-md q-px-md" >
             <div style="display: flex; justify-content:space-between" class="q-pa-sm">
              <q-skeleton :type="'QBtn'"  />
              <q-skeleton :type="'QBtn'"  />
              <q-skeleton :type="'QBtn'"  />
             </div>
            </q-item-label>

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle2" animation="fade" width="50%"/>
          </q-card-section>
           <div style="display: flex; justify-content:center" class="q-pb-sm">
              <q-skeleton :type="'rect'" width="50%"  />      
             </div> 
             <q-card-section>
            <q-skeleton type="text" class="text-subtitle2" animation="fade" width="50%"/>
          </q-card-section>
          <div  style="display: flex; justify-content:center" class="q-pb-md">
              <q-skeleton width="90%" height="120px"  />      
             </div>
        </q-card>       
      </div>
        <div class="q-pa-md">
        <q-card flat bordered fullwidth>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" animation="fade" />
              </q-item-label>
            </q-item-section>
            <q-card-section side>
              <q-skeleton :type="'QCheckbox'" size="20px" />
            </q-card-section>
          </q-item>

          <q-item-label class="q-pt-md q-px-md" >
             <div style="display: flex; justify-content:space-between" class="q-pa-sm">
              <q-skeleton :type="'QBtn'"  />
              <q-skeleton :type="'QBtn'"  />
              <q-skeleton :type="'QBtn'"  />
             </div>
            </q-item-label>

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle2" animation="fade" width="50%"/>
          </q-card-section>
           <div style="display: flex; justify-content:center" class="q-pb-sm">
              <q-skeleton :type="'rect'" width="50%"  />      
             </div> 
             <q-card-section>
            <q-skeleton type="text" class="text-subtitle2" animation="fade" width="50%"/>
          </q-card-section>
          <div  style="display: flex; justify-content:center" class="q-pb-md">
              <q-skeleton width="90%" height="120px"  />      
             </div>
        </q-card>       
      </div>
        <div class="q-pa-md">
        <q-card flat bordered fullwidth>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" animation="fade" />
              </q-item-label>
            </q-item-section>
            <q-card-section side>
              <q-skeleton :type="'QCheckbox'" size="20px" />
            </q-card-section>
          </q-item>

          <q-item-label class="q-pt-md q-px-md" >
             <div style="display: flex; justify-content:space-between" class="q-pa-sm">
              <q-skeleton :type="'QBtn'"  />
              <q-skeleton :type="'QBtn'"  />
              <q-skeleton :type="'QBtn'"  />
             </div>
            </q-item-label>

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle2" animation="fade" width="50%"/>
          </q-card-section>
           <div style="display: flex; justify-content:center" class="q-pb-sm">
              <q-skeleton :type="'rect'" width="50%"  />      
             </div> 
             <q-card-section>
            <q-skeleton type="text" class="text-subtitle2" animation="fade" width="50%"/>
          </q-card-section>
          <div  style="display: flex; justify-content:center" class="q-pb-md">
              <q-skeleton width="90%" height="120px"  />      
             </div>
        </q-card>       
      </div>
    </q-page>
  </div>
</template>

<style scoped>
/* Add any scoped styles if needed */
.q-toolbar-title {
  font-size: 18px;
}

.text-weight-medium {
  font-weight: 500;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  margin-top: -4%;
}

.flex-item {
  flex: 1;
  margin-right: 20px;
}

.q-item-section {
  margin-top: 10px;
}

.q-item-label {
  font-size: 16px;
  margin-bottom: 8px;
}

.image-right {
  width: 187.041px;
  height: 111.807px;
  flex-shrink: 0;
}

.q-pa-md.items-start {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.q-item-label.caption {
  font-size: 14px;
}

.rounded-box {
  border-radius: 12px;
  overflow: hidden;
  margin-top: 10px;
  background-color: #f5f5f5;
  padding: 10px;
  margin-left: 3%;
  margin-right: 3%;
}

.q-list {
  display: flex;
  align-items: center;
}

.q-img {
  margin-right: 10px;
}

.rounded-list-subtitle2 {
  color: #53aa0f;
}
</style>

<script>
export default {
  name: "SkelQuestioncard",
};
</script>

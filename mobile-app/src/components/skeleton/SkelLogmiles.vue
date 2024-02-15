<template>
  <div>
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
    <q-page-container>
      <q-page>
        <div class="flex-container imageCenter">
          <div>
            <q-skeleton :type="'rect'" width="187.041px" height="111.807px" />
          </div>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div class="q-pa-md">
            <q-item-section class="text-weight-medium">
              <q-item-label class="text-left">
                <q-skeleton :type="'text'" class="q-ml-sm" width="100px" />
              </q-item-label>
            </q-item-section>
          </div>
          <div class="q-pa-md">
            <q-item-section class="text-weight-medium q-ml-sm">
              <q-item-label>
                <q-skeleton :type="'text'" width="100px" />
              </q-item-label>
            </q-item-section>
          </div>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div class="q-pa-md">
            <q-item-section class="text-weight-medium">
              <q-item-label class="text-left">
                <q-skeleton :type="'text'" class="q-ml-sm" width="100px" />
              </q-item-label>
            </q-item-section>
          </div>
          <div class="q-pa-md">
            <q-item-section class="text-weight-medium">
              <q-item-label>
                <q-skeleton :type="'text'" width="100px" />
              </q-item-label>
            </q-item-section>
          </div>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div class="q-pa-md">
            <q-item-section class="text-weight-medium">
              <q-item-label class="text-left">
                <q-skeleton :type="'text'" class="q-ml-sm" width="100px" />
              </q-item-label>
            </q-item-section>
          </div>
          <div class="q-pa-md">
            <q-item-section class="text-weight-medium">
              <q-item-label>
                <q-skeleton :type="'text'" width="100px" />
              </q-item-label>
            </q-item-section>
          </div>
        </div>
        <div class="q-pa-md">
          <q-item-section class="text-weight-medium">
            <q-item-label class="text-left">
              <q-skeleton :type="'text'" class="q-ml-sm" width="150px" />
            </q-item-label>
          </q-item-section>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
          class="q-pa-lg"
        >
          <q-skeleton :type="'QBtn'" width="130px"/>
          <q-skeleton :type="'QBtn'" width="130px"/>
        </div>

               <div
        style="
          display: flex;
          justify-content: center;

          position: fixed;
          z-index: 999;
          padding: 10px;
          width: 100%;
          box-sizing: border-box;
          background-color:white;
          bottom: 0px;
        "
      >
          <q-skeleton  :type="'QBtn'"  style="width: 169.224px; height: 49px"/>
           <q-skeleton  :type="'QBtn'"  style="width: 169.224px; height: 49px"/>
               </div>

      </q-page>
    </q-page-container>
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
  justify-content: center;
  align-items: center;
}

.flex-item {
  margin-top: 40px;
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
  name: "SkelLogmiles",
};
</script>

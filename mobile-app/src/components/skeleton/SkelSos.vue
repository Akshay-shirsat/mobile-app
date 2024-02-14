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
    <q-page>
      <div class="q-pa-md q-gutter-sm">
        <q-list
          rounded
          padding
          dense
          class="rounded-borders; bg-grey-2"
          style="
            max-width: 768px;
            display: flex;
            align-items: center;
            height: 66.281px;
          "
        >
          <q-card-section side>
            <q-skeleton :type="'QCheckbox'" size="30px" />
          </q-card-section>
          <q-item clickable v-ripple style="flex-grow: 1">
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
              >
                <q-skeleton :type="'text'" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="q-px-md q-gutter-sm">
        <q-list
          rounded
          padding
          dense
          class="rounded-borders; bg-grey-2"
          style="
            max-width: 768px;
            display: flex;
            align-items: center;
            height: 66.281px;
          "
        >
          <q-card-section side>
            <q-skeleton :type="'QCheckbox'" size="30px" />
          </q-card-section>
          <q-item clickable v-ripple style="flex-grow: 1">
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
              >
                <q-skeleton :type="'text'" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-list
          rounded
          padding
          dense
          class="rounded-borders; bg-grey-2"
          style="
            max-width: 768px;
            display: flex;
            align-items: center;
            height: 66.281px;
          "
        >
          <q-card-section side>
            <q-skeleton :type="'QCheckbox'" size="30px" />
          </q-card-section>
          <q-item clickable v-ripple style="flex-grow: 1">
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
              >
                <q-skeleton :type="'text'" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-item-section>
        <q-item-label
          style="display: flex; justify-content: center; align-items: center"
        >
          <q-skeleton :type="'text'" width="150px" class="q-pa-md" />
        </q-item-label>
      </q-item-section>
    </q-page>
  </div>
</template>

<style scoped>

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

</style>

<script>
export default {
  name: "SkelSos",
};
</script>

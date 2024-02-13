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
        <div class="flex-container">
          <div class="flex-item top-section">
            <q-item-section class="text-weight-medium">
              <q-item-label class="text-left q-ml-md">
                <q-skeleton :type="'text'" width="150px" height="30px" />
              </q-item-label>
              <q-item-label class="text-left q-ml-md">
                <q-skeleton :type="'QBtn'" width="150px" />
              </q-item-label>
            </q-item-section>
            <q-item-section class="text-weight-medium q-ml-md">
              <q-item-label class="text-left q-ml-md q-mt-md">
                <q-skeleton :type="'QChip'" width="110px" height="35px" />
              </q-item-label>
            </q-item-section>
          </div>

          <div class="flex-item">
            <q-skeleton :type="'rect'" width="187.041px" height="111.807px" />
          </div>
        </div>
        <div class="q-pa-md items-start">
          <div
            style="display: flex; justify-content: center; align-items: center"
          >
            <q-item-section class="text-weight-medium q-ml-md">
              <q-item-label class="text-left q-ml-md q-mt-md">
                <q-skeleton :type="'QChip'" width="310px" height="35px" />
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
          <div class="flex-item top-section">
            <q-item-section class="text-weight-medium q-ml-sm">
              <q-item-label class="text-left">
                <q-skeleton :type="'text'" class="q-ml-sm" width="150px" />
              </q-item-label>
            </q-item-section>
          </div>
          <div class="q-pa-md">
            <q-item-label class="text-left text-bold" lines="1">
              <q-skeleton :type="'QBtn'" width="100px" />
            </q-item-label>
          </div>
        </div>

        <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
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
            <q-img
              class="q-mr-sm"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                >
                  <q-skeleton :type="'text'" />
                </q-item-label>
              </q-item-section>
              <q-card-section side>
                <q-skeleton :type="'QCheckbox'" size="30px" />
              </q-card-section>
            </q-item>
          </q-list>
        </div>
        <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
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
            <q-img
              class="q-mr-sm"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                >
                  <q-skeleton :type="'text'" />
                </q-item-label>
              </q-item-section>
              <q-card-section side>
                <q-skeleton :type="'QCheckbox'" size="30px" />
              </q-card-section>
            </q-item>
          </q-list>
        </div>
        <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
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
            <q-img
              class="q-mr-sm"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                >
                  <q-skeleton :type="'text'" />
                </q-item-label>
              </q-item-section>
              <q-card-section side>
                <q-skeleton :type="'QCheckbox'" size="30px" />
              </q-card-section>
            </q-item>
          </q-list>
        </div>
        <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
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
            <q-img
              class="q-mr-sm"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                >
                  <q-skeleton :type="'text'" />
                </q-item-label>
              </q-item-section>
              <q-card-section side>
                <q-skeleton :type="'QCheckbox'" size="30px" />
              </q-card-section>
            </q-item>
          </q-list>
        </div>
        <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
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
            <q-img
              class="q-mr-sm"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                >
                  <q-skeleton :type="'text'" />
                </q-item-label>
              </q-item-section>
              <q-card-section side>
                <q-skeleton :type="'QCheckbox'" size="30px" />
              </q-card-section>
            </q-item>
          </q-list>
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
  name: "SkelDrafts",
};
</script>

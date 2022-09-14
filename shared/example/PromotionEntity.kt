package th.co.robinhood.model.promotion.promotionjaa

import com.google.gson.annotations.SerializedName


data class PromotionJaaPromotionJaaEntity(
    @SerializedName("promotionList") var promotionList: List<PromotionListEntity>?,
    @SerializedName("pagination") var pagination: PaginationEntity?,

)

data class PromotionJaaPromotionListEntity(
    @SerializedName("promotionId") var promotionId: Int?,
    @SerializedName("promotionName") var promotionName: String?,
    @SerializedName("shortDescription") var shortDescription: String?,
    @SerializedName("discount") var discount: Int?,
    @SerializedName("maximumDiscount") var maximumDiscount: Int?,
    @SerializedName("discountType") var discountType: String?,
    @SerializedName("discountFor") var discountFor: String?,
    @SerializedName("promotionLink") var promotionLink: String?,
    @SerializedName("promotionType") var promotionType: String?,
    @SerializedName("iconUrl") var iconUrl: String?,
    @SerializedName("voucherCode") var voucherCode: String?,
    @SerializedName("promotionCode") var promotionCode: String?,
    @SerializedName("startDate") var startDate: String?,
    @SerializedName("endDate") var endDate: String?,
    @SerializedName("applicationKey") var applicationKey: String?,

)

data class PromotionJaaPaginationEntity(
    @SerializedName("currentPage") var currentPage: Int?,
    @SerializedName("pageSize") var pageSize: Int?,
    @SerializedName("hasNextPage") var hasNextPage: Boolean?,
    @SerializedName("hasPreviousPage") var hasPreviousPage: Boolean?,

)

